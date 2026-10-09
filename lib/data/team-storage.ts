import fs from "fs";
import path from "path";
import type { TeamMember } from "@/lib/supabase/queries";
import bundledMembers from "./team-members.json";

// The bundled leadership team. Shown on the public site until the admin has
// imported/added members in Supabase, and used as the starting data for the
// local JSON store below.
export const defaultTeamMembers: TeamMember[] = bundledMembers as TeamMember[];

// Local-only store used when no Supabase project is connected (local dev).
// Serverless hosts like Vercel have a read-only filesystem, so production
// must always go through Supabase instead — see lib/supabase/actions.ts.
const STORAGE_FILE = path.join(process.cwd(), "lib", "data", "team-members.json");

let inMemoryStore: TeamMember[] | null = null;

export function getStoredTeamMembers(): TeamMember[] {
  if (inMemoryStore !== null) return [...inMemoryStore];

  try {
    if (fs.existsSync(STORAGE_FILE)) {
      const parsed = JSON.parse(fs.readFileSync(STORAGE_FILE, "utf-8"));
      if (Array.isArray(parsed)) {
        inMemoryStore = parsed;
        return [...parsed];
      }
    }
  } catch (err) {
    console.warn("Could not read team-members.json from disk:", err);
  }

  inMemoryStore = [...defaultTeamMembers];
  return [...inMemoryStore];
}

function persist(members: TeamMember[]) {
  inMemoryStore = members;
  try {
    fs.writeFileSync(STORAGE_FILE, JSON.stringify(members, null, 2) + "\n", "utf-8");
  } catch (err) {
    console.warn("Could not write team-members.json to disk:", err);
  }
}

export function saveStoredTeamMember(member: TeamMember): TeamMember {
  const current = getStoredTeamMembers();
  const existingIndex = current.findIndex((m) => m.id === member.id);

  if (existingIndex >= 0) {
    current[existingIndex] = { ...current[existingIndex], ...member };
  } else {
    current.push(member);
  }

  persist(current);
  return member;
}

export function deleteStoredTeamMember(id: string): boolean {
  persist(getStoredTeamMembers().filter((m) => m.id !== id));
  return true;
}

export function getStoredTeamMemberById(id: string): TeamMember | null {
  return getStoredTeamMembers().find((m) => m.id === id) || null;
}
