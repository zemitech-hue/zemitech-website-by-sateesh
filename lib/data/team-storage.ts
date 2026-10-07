import fs from "fs";
import path from "path";
import type { TeamMember } from "@/lib/supabase/queries";

const STORAGE_FILE = path.join(process.cwd(), "lib", "data", "team-members.json");

// Default initial team members derived from company leadership
const defaultInitialMembers: TeamMember[] = [
  {
    id: "tm-1",
    name: "Er. Manish K. Sah",
    role: "Director & Project Head",
    experience: "10+ Years",
    image_url: "/images/about/zemara-team.png",
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30).toISOString(),
  },
  {
    id: "tm-2",
    name: "Er. Ashutosh Kumar",
    role: "Director & Structural Head",
    experience: "8+ Years",
    image_url: "/images/about/milestone-2019-construction.png",
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 20).toISOString(),
  },
  {
    id: "tm-3",
    name: "Dr. Kumar S. Chandra",
    role: "Principal Advisory Architect",
    experience: "14+ Years",
    image_url: "/images/about/milestone-2022-interiors.png",
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10).toISOString(),
  },
];

// In-memory cache for ultra-fast serverless & local runtime access
let inMemoryStore: TeamMember[] | null = null;

export function getStoredTeamMembers(): TeamMember[] {
  if (inMemoryStore !== null) {
    return [...inMemoryStore];
  }

  try {
    if (fs.existsSync(STORAGE_FILE)) {
      const raw = fs.readFileSync(STORAGE_FILE, "utf-8");
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        inMemoryStore = parsed;
        return [...parsed];
      }
    }
  } catch (err) {
    console.warn("Could not read team-members.json from disk:", err);
  }

  inMemoryStore = [...defaultInitialMembers];
  return [...inMemoryStore];
}

export function saveStoredTeamMember(member: TeamMember): TeamMember {
  const current = getStoredTeamMembers();
  const existingIndex = current.findIndex((m) => m.id === member.id);

  let updated: TeamMember[];
  if (existingIndex >= 0) {
    updated = [...current];
    updated[existingIndex] = { ...updated[existingIndex], ...member };
  } else {
    updated = [member, ...current];
  }

  inMemoryStore = updated;

  try {
    const dir = path.dirname(STORAGE_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(STORAGE_FILE, JSON.stringify(updated, null, 2), "utf-8");
  } catch (err) {
    console.warn("Could not write team-members.json to disk (read-only filesystem or serverless):", err);
  }

  return member;
}

export function deleteStoredTeamMember(id: string): boolean {
  const current = getStoredTeamMembers();
  const filtered = current.filter((m) => m.id !== id);
  inMemoryStore = filtered;

  try {
    fs.writeFileSync(STORAGE_FILE, JSON.stringify(filtered, null, 2), "utf-8");
  } catch (err) {
    console.warn("Could not write team-members.json to disk:", err);
  }

  return true;
}

export function getStoredTeamMemberById(id: string): TeamMember | null {
  const current = getStoredTeamMembers();
  return current.find((m) => m.id === id) || null;
}
