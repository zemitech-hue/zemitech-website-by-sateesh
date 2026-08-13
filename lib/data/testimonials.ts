// Placeholder testimonials. The client has not yet supplied real client reviews —
// replace these via Admin → Testimonials once available. Kept realistic in tone
// and specific to the services offered, per project brief.
export type Testimonial = {
  name: string;
  location: string;
  project: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Prashant Deshmukh",
    location: "Narhe, Pune",
    project: "Residential Construction",
    quote:
      "What stood out was the weekly reporting — I always knew exactly where the site stood without having to call anyone. Handover happened within two weeks of the promised date.",
    rating: 5,
  },
  {
    name: "Ritika Shah",
    location: "Kondhwa, Pune",
    project: "Turnkey Interior",
    quote:
      "We saw the 3D render of every room before anything was ordered, so there were no surprises when the kitchen and wardrobes were installed. Exactly what we approved.",
    rating: 5,
  },
  {
    name: "Aniket Rane",
    location: "Hinjewadi, Pune",
    project: "Commercial Fit-out",
    quote:
      "Our office had to be ready before the lease started. The team coordinated HVAC, fire and electrical vendors on one schedule and we moved in on time.",
    rating: 5,
  },
  {
    name: "Sunita Patil",
    location: "Viman Nagar, Pune",
    project: "Modular Kitchen",
    quote:
      "The corner storage in our L-shape kitchen fits things we used to just pile on the counter. Installation was done in under a week once the units arrived.",
    rating: 4,
  },
  {
    name: "Vikram Oswal",
    location: "Wagholi, Pune",
    project: "Residential Construction",
    quote:
      "We used our own architect's plans and Zemitech simply took over structural engineering and execution — no friction, no re-drawing. Site supervisor was present every single day.",
    rating: 5,
  },
  {
    name: "Meera Kulkarni",
    location: "Kondhwa, Pune",
    project: "Bedroom Interiors",
    quote:
      "Our daughter's room needed to work now and in five years. The modular wardrobe system they suggested has already been reconfigured once as she's grown, without replacing anything.",
    rating: 5,
  },
  {
    name: "Rohan Bhagwat",
    location: "Baner, Pune",
    project: "Commercial Fit-out",
    quote:
      "Five retail units, five different tenant timelines, one shell-and-core schedule that didn't slip. That's the part most contractors get wrong.",
    rating: 4,
  },
  {
    name: "Sandeep Joshi",
    location: "Pirangut, Pune",
    project: "Township Infrastructure",
    quote:
      "Phase 1 handover happened block by block, exactly as planned against our sales timeline. Drainage and road work never held up a single possession date.",
    rating: 5,
  },
  {
    name: "Deepak Shinde",
    location: "Hinjewadi, Pune",
    project: "Full-Home Turnkey Interior",
    quote:
      "From modular kitchen joinery to lighting and wardrobe organization, everything was delivered under one contract with transparent stage updates.",
    rating: 5,
  },
];
