# Complete Image Generation & Naming Guide

This guide contains the exact folder structure, filenames, dimensions, aspect ratios, composition requirements, and AI generation prompts for all images required on the **Zemitech Urban ("Building & Renovation")** website.

---

## 🎯 Image Composition Rules & Aspect Ratios

When generating images with tools like **Midjourney v6**, **Flux 1.1 Pro**, **DALL-E 3**, or **Stable Diffusion**, append the suggested aspect ratio tag to your prompt.

1. **`[HERO]`** (`--ar 16:9` | Resolution: `1920x1080`)
   - **Composition**: Full-bleed hero banner background with text overlaid on the bottom-left.
   - **Critical Rule**: Keep the **left 40% clean, uncluttered, and simple** (soft sky, plain smooth wall, subtle gradient blur, negative space). The main building or interior subject MUST sit in the **right 60% of the frame**.

2. **`[SERVICE HERO]`** (`--ar 16:9` | Resolution: `1920x1080`)
   - **Composition**: Sub-service hero background with text on top-left over a dark scrim.
   - **Critical Rule**: Keep the top-left quadrant visually quiet and clean. Subject sits center or right.

3. **`[CARD]`** (`--ar 16:10` | Resolution: `1200x750`)
   - **Composition**: Showcase card photo. Subject centered, filling frame, crisp focus, architectural lighting. No text overlay.

4. **`[MATERIAL]`** (`--ar 1:1` | Resolution: `1000x1000`)
   - **Composition**: Extreme macro texture shot filling the entire square frame. No people, no text, realistic material lighting and surface details.

5. **`[ROOM]`** (`--ar 16:9` | Resolution: `1600x900`)
   - **Composition**: Wide interior architectural photo. Beautifully lit, warm ambiance, magazine feature style.

6. **`[DOC PHOTO]`** (`--ar 4:3` | Resolution: `1200x900`)
   - **Composition**: Realistic documentary/candid style photo. Real engineers, site work, or consultations.

7. **`[PORTRAIT BLOCK]`** (`--ar 4:5` | Resolution: `1000x1250`)
   - **Composition**: Taller split-screen vertical photo. Subject centered.

8. **`[SERVICE TILE]`** (`--ar 16:9` | Resolution: `1600x900`)
   - **Composition**: Clean, vibrant service category cover photo for home page carousel.

---

## 📁 1. Homepage Carousel
**Target Folder**: `public/images/MainHeroBannersCarousel/`

* `Construction Division.png` — **[HERO]** `--ar 16:9`
  > **Prompt**: Architectural photograph of an active modern residential construction project in urban India during golden hour. Scaffolding, concrete RCC structure, and civil engineers on the right side of the frame. Soft, calm golden blue sky on the left side of the frame with negative space for text overlay. Hyperrealistic, 8k resolution, cinematic lighting, sharp architectural detail --ar 16:9 --style raw

* `Interior Design Division.png` — **[HERO]** `--ar 16:9`
  > **Prompt**: Wide-angle interior photograph of a luxury modern living room in Pune, India. Warm wood paneling, contemporary sofa, mood lighting, and accent wall on the right 60% of the image. Clean, softly lit feature wall on the left 40% creating calm negative space. Photorealistic, architectural digest aesthetic, 8k --ar 16:9 --style raw

* `Residential Construction.png` — **[HERO]** `--ar 16:9`
  > **Prompt**: Modern G+2 luxury independent villa under final exterior finishing in Pune. Sleek modern facade, warm lighting, and landscaping on the right. Soft morning sky and minimal trees on the left. High resolution architectural photography, 8k --ar 16:9

* `Kitchen Design.png` — **[HERO]** `--ar 16:9`
  > **Prompt**: High-end modular kitchen design with handleless acrylic cabinets, quartz island countertop, integrated LED profile lights on the right half. Smooth soft backdrop with gentle warm lighting on the left half. Photorealistic interior render, 8k --ar 16:9

* `Living Room Design.png` — **[HERO]** `--ar 16:9`
  > **Prompt**: Luxury urban living room featuring a custom floating TV unit, fluted wooden wall panels, warm cove lighting on the right side. Clean neutral wall with subtle sunlight shadows on the left side. Magazine quality photography, photorealistic --ar 16:9

---

## 📁 2. Homepage Sections & Workflows
**Target Folder**: `public/images/home/`

* `how-we-work-1-consult.png` — **[CARD]** `--ar 16:10`
  > **Prompt**: Professional Indian interior designer and homeowner sitting at a sleek desk reviewing floor plans and material swatches. Warm studio lighting, friendly consultation atmosphere, professional photography, natural shallow depth of field --ar 16:10

* `how-we-work-2-design.png` — **[CARD]** `--ar 16:10`
  > **Prompt**: High-tech architectural design workstation showing CAD blue prints and 3D architectural renders on a large monitor. Architectural tools, iPad with stylus, and wood material samples neatly arranged on the table. Photorealistic, crisp detail --ar 16:10

* `how-we-work-3-build.png` — **[CARD]** `--ar 16:10`
  > **Prompt**: Active luxury interior fit-out site in progress. Professional carpenter inspecting precision woodwork, warm ambient lighting, clean organized work environment, photorealistic --ar 16:10

* `how-we-work-4-handover.png` — **[CARD]** `--ar 16:10`
  > **Prompt**: Happy Indian family receiving keys and project documentation from a smiling site manager in a beautifully completed modern home interior. Bright daylight, heartwarming moment, high resolution photo --ar 16:10

* `areas-served-map.png` — **[MAP GRAPHIC]** `--ar 1:1`
  > **Prompt**: Minimalist modern vector map graphic of Pune city, Maharashtra highlighting key urban zones (Narhe, Baner, Wakad, Kothrud, Hadapsar, Kharadi). Deep navy blue background, green map accent pins, sleek UI design aesthetic, clean vector illustration --ar 1:1

---

## 📁 3. Construction: Residential Construction
**Target Folder**: `public/images/construction/residential/`

* `hero.png` — **[HERO]** `--ar 16:9`
  > **Prompt**: Modern G+2 luxury villa mid-construction in Pune, India. RCC framing completed with brick masonry on the right 60%. Clear blue sky with open negative space on the left 40%. Crisp daylight photography, professional architectural perspective --ar 16:9

* `card-1.png` — **[CARD]** `--ar 16:10`
  > **Prompt**: Completed modern luxury independent villa exterior in Pune. Contemporary facade design, manicured front garden, paved driveway, warm ambient exterior lighting, photorealistic --ar 16:10

* `card-2.png` — **[CARD]** `--ar 16:10`
  > **Prompt**: Completed modern duplex house exterior featuring glass balconies, wooden finish louvers, clean geometric architectural design, daytime clear sky --ar 16:10

* `card-3.png` — **[CARD]** `--ar 16:10`
  > **Prompt**: Premium multi-floor (G+3) apartment residence building exterior in an urban setting. Modern balconies, high-end exterior paint finish, photorealistic --ar 16:10

* `card-4.png` — **[CARD]** `--ar 16:10`
  > **Prompt**: Brand new turnkey home exterior handed over to owners, clean architectural lines, lush green landscaping, bright sunny day, perfect finish --ar 16:10

* `material-1.png` — **[MATERIAL]** `--ar 1:1`
  > **Prompt**: Macro close-up texture shot of wet M30 ready-mix concrete surface being troweled smoothly. High texture detail, realistic liquid cement reflections, 8k --ar 1:1

* `material-2.png` — **[MATERIAL]** `--ar 1:1`
  > **Prompt**: Macro extreme close-up of tied Fe550D TMT rebar steel grid with structural steel binding wires. Industrial engineering photography, high detail --ar 1:1

* `material-3.png` `--ar 1:1`
  > **Prompt**: Close-up macro texture of stacked Autoclaved Aerated Concrete (AAC) blocks showing porous concrete texture, clean grey tone --ar 1:1

* `material-4.png` `--ar 1:1`
  > **Prompt**: Macro close-up of premium Italian vitrified floor tile texture with subtle grey vein patterns, glossy reflective finish --ar 1:1

---

## 📁 4. Construction: Industrial Construction
**Target Folder**: `public/images/construction/industrial/`

* `hero.png` — **[HERO]** `--ar 16:9`
  > **Prompt**: Exterior of a massive modern industrial pre-engineered steel warehouse under construction. Steel trusses and structure visible on the right. Soft sky and calm background on the left. High resolution engineering photography --ar 16:9

* `card-1.png` — **[CARD]** `--ar 16:10`
  > **Prompt**: Completed high-bay logistics warehouse exterior with concrete apron, loading docks, and heavy rolling doors, clear sky background --ar 16:10

* `card-2.png` — **[CARD]** `--ar 16:10`
  > **Prompt**: Pre-Engineered Steel Shed (PEB) structure mid-erection showing clear-span steel trusses and heavy steel columns, industrial site --ar 16:10

* `card-3.png` — **[CARD]** `--ar 16:10`
  > **Prompt**: Interior of a huge modern logistics facility with polished concrete trimix flooring, high ceilings, overhead gantry crane tracks --ar 16:10

* `card-4.png` — **[CARD]** `--ar 16:10`
  > **Prompt**: High-tech factory manufacturing plant floor interior with heavy equipment, industrial ventilation, clean epoxy flooring --ar 16:10

* `material-1.png` — **[MATERIAL]** `--ar 1:1`
  > **Prompt**: Close-up texture of an industrial loading dock bumper and heavy-duty steel dock leveler plate, industrial finish --ar 1:1

* `material-2.png` — **[MATERIAL]** `--ar 1:1`
  > **Prompt**: Extreme macro close-up of mirror-finish polished epoxy industrial floor surface, subtle light reflections --ar 1:1

* `material-3.png` — **[MATERIAL]** `--ar 1:1`
  > **Prompt**: Close-up macro shot of heavy steel bolt connection on structural steel roof truss, industrial engineering --ar 1:1

* `material-4.png` — **[MATERIAL]** `--ar 1:1`
  > **Prompt**: Close-up macro view of heavy-duty cast iron industrial trench drain grate set into concrete pavement --ar 1:1

---

## 📁 5. Construction: Home Renovation
**Target Folder**: `public/images/construction/renovation/`

* `hero.png` — **[HERO]** `--ar 16:9`
  > **Prompt**: Modern villa exterior undergoing complete facade overhaul and renovation. Fresh paint work, scaffolding on right 60%. Simple soft sky on left 40% --ar 16:9

* `card-1.png` — **[CARD]** `--ar 16:10`
  > **Prompt**: Beautifully renovated modern villa exterior after complete makeover, wooden highlights, glass railings, lush green garden --ar 16:10

* `card-2.png` — **[CARD]** `--ar 16:10`
  > **Prompt**: Fully renovated modern modular kitchen after remodeling, quartz countertops, brass fittings, warm under-cabinet lighting --ar 16:10

* `card-3.png` — **[CARD]** `--ar 16:10`
  > **Prompt**: Renovated luxury living room with new false ceiling, cove lighting, floating TV console, textured accent wall --ar 16:10

* `card-4.png` — **[CARD]** `--ar 16:10`
  > **Prompt**: Structural civil renovation work in progress inside a home, steel beam reinforcement and wall removal neatly executed --ar 16:10

* `material-1.png` — **[MATERIAL]** `--ar 1:1`
  > **Prompt**: Macro texture shot of matte ceramic tile finish with fine tactile surface detail --ar 1:1

* `material-2.png` — **[MATERIAL]** `--ar 1:1`
  > **Prompt**: Macro close-up texture of washable premium acrylic wall paint in soft neutral cream tone --ar 1:1

* `material-3.png` — **[MATERIAL]** `--ar 1:1`
  > **Prompt**: Close-up macro shot of a sleek matte black luxury bathroom faucet brass fixture with water droplets --ar 1:1

* `material-4.png` — **[MATERIAL]** `--ar 1:1`
  > **Prompt**: Close-up macro shot of fine teak wood joinery joint finish on a custom door frame --ar 1:1

---

## 📁 6. Construction: Structural & Civil Engineering
**Target Folder**: `public/images/construction/structural-civil-engineering/`

* `hero.png` — **[HERO]** `--ar 16:9`
  > **Prompt**: Heavy structural RCC building frame under construction in Pune. Steel rebar shuttering and concrete columns on right 60%, clear blue sky on left 40% --ar 16:9

* `card-1.png` — **[CARD]** `--ar 16:10`
  > **Prompt**: RCC structural column and slab formwork with aluminum shuttering sheets on a multi-story building project --ar 16:10

* `card-2.png` — **[CARD]** `--ar 16:10`
  > **Prompt**: Deep foundation excavation site showing steel pile foundations and raft footing casting in progress --ar 16:10

* `card-3.png` — **[CARD]** `--ar 16:10`
  > **Prompt**: Precision brick masonry and AAC block wall construction with level alignment strings and mortar work --ar 16:10

* `card-4.png` — **[CARD]** `--ar 16:10`
  > **Prompt**: Well-organized construction job site featuring site office container, safety signage, neatly stacked materials, green safety netting --ar 16:10

* `material-1.png` — **[MATERIAL]** `--ar 1:1`
  > **Prompt**: Civil engineer inspecting column plumb line alignment with laser level on site, close-up details --ar 1:1

* `material-2.png` — **[MATERIAL]** `--ar 1:1`
  > **Prompt**: Macro shot of heavy steel reinforcement cage mesh tied with precision wire --ar 1:1

* `material-3.png` — **[MATERIAL]** `--ar 1:1`
  > **Prompt**: Macro view of concrete slump test cone and concrete cube testing equipment on site --ar 1:1

* `material-4.png` — **[MATERIAL]** `--ar 1:1`
  > **Prompt**: Macro view of water curing technique on a fresh RCC concrete column surface, wet cement texture --ar 1:1

---

## 📁 7. Construction Overview Page
**Target Folder**: `public/images/construction/overview/`

* `hero.png` — **[HERO]** `--ar 16:9`
  > **Prompt**: Wide dramatic view of a commercial construction project in Pune. Tower crane and RCC structure on right 60%, soft sky on left 40% --ar 16:9

* `material-1.png` — **[MATERIAL]** `--ar 1:1`
  > **Prompt**: Close-up macro shot of structural steel beam quality inspection stamp --ar 1:1

* `material-2.png` — **[MATERIAL]** `--ar 1:1`
  > **Prompt**: Close-up of raw OPC 53 grade cement powder texture macro view --ar 1:1

* `material-3.png` — **[MATERIAL]** `--ar 1:1`
  > **Prompt**: Close-up macro stack of high-density red clay bricks showing crisp edges and rough terra cotta texture --ar 1:1

* `material-4.png` — **[MATERIAL]** `--ar 1:1`
  > **Prompt**: Macro close-up of natural Indian granite slab surface with subtle mineral specks --ar 1:1

---

## 📁 8. Interior Design: Modular Kitchen
**Target Folder**: `public/images/interior/kitchen/`

* `hero.png` — **[HERO]** `--ar 16:9`
  > **Prompt**: Wide luxury modular kitchen interior. Sleek quartz island, acrylic shutters, built-in oven on right 60%, warm clean wall lighting on left 40% --ar 16:9

* `card-1.png` — **[CARD]** `--ar 16:10`
  > **Prompt**: L-shaped modern modular kitchen design with grey matte cabinets, white quartz countertop, warm under-cabinet LED strip lights --ar 16:10

* `card-2.png` — **[CARD]** `--ar 16:10`
  > **Prompt**: U-shaped modular kitchen layout featuring wood veneer shutters, integrated breakfast counter, ambient profile lighting --ar 16:10

* `card-3.png` — **[CARD]** `--ar 16:10`
  > **Prompt**: Parallel layout modular kitchen with dual workstation sides, stainless steel chimney, glossy white and teal cabinets --ar 16:10

* `card-4.png` — **[CARD]** `--ar 16:10`
  > **Prompt**: Luxury island modular kitchen with central quartz counter, bar stools, hanging brass pendant lights, open layout --ar 16:10

* `material-1.png` — **[MATERIAL]** `--ar 1:1`
  > **Prompt**: Macro close-up texture of anti-fingerprint matte laminate surface --ar 1:1

* `material-2.png` — **[MATERIAL]** `--ar 1:1`
  > **Prompt**: Macro texture of natural oak wood veneer with matte polyurethane coat --ar 1:1

* `material-3.png` — **[MATERIAL]** `--ar 1:1`
  > **Prompt**: Macro texture of high-gloss champagne acrylic kitchen shutter surface reflecting soft ambient light --ar 1:1

* `material-4.png` — **[MATERIAL]** `--ar 1:1`
  > **Prompt**: Macro close-up of fluted tinted glass cabinet door panel in black aluminum profile frame --ar 1:1

---

## 📁 9. Interior Design: Living Room
**Target Folder**: `public/images/interior/living-room/`

* `hero.png` — **[HERO]** `--ar 16:9`
  > **Prompt**: Luxury living room with bespoke wall paneling, modern sofa, and TV unit on right 60%. Softly lit neutral plaster wall on left 40% --ar 16:9

* `card-1.png` — **[CARD]** `--ar 16:10`
  > **Prompt**: Modern TV wall console design featuring Italian marble backing sheet, floating wooden storage drawers, LED backlit strips --ar 16:10

* `card-2.png` — **[CARD]** `--ar 16:10`
  > **Prompt**: Feature accent wall design with charcoal grey fluted panels and brushed gold metal inlay strips in a living room --ar 16:10

* `card-3.png` — **[CARD]** `--ar 16:10`
  > **Prompt**: Designer false ceiling in living room with indirect warm LED cove lighting and sleek magnetic track spotlights --ar 16:10

* `card-4.png` — **[CARD]** `--ar 16:10`
  > **Prompt**: Custom built-in display shelving unit with warm display lights, luxury decor items, wood veneer finish --ar 16:10

* `material-1.png` — **[MATERIAL]** `--ar 1:1`
  > **Prompt**: Macro texture shot of smoked walnut wood veneer paneling --ar 1:1

* `material-2.png` — **[MATERIAL]** `--ar 1:1`
  > **Prompt**: Macro texture shot of vertical wood acoustic fluted wall panel --ar 1:1

* `material-3.png` — **[MATERIAL]** `--ar 1:1`
  > **Prompt**: Macro close-up of textured fabric upholstery sofa weave in neutral beige tone --ar 1:1

* `material-4.png` — **[MATERIAL]** `--ar 1:1`
  > **Prompt**: Macro close-up of bookmatched Michel Angelo natural marble slab texture --ar 1:1

---

## 📁 10. Interior Design: Master Bedroom
**Target Folder**: `public/images/interior/bedroom/`

* `hero.png` — **[HERO]** `--ar 16:9`
  > **Prompt**: Luxury master bedroom interior. Cushioned headboard wall, bed, and floor-to-ceiling wardrobe on right 60%. Soft light wall on left 40% --ar 16:9

* `card-1.png` — **[CARD]** `--ar 16:10`
  > **Prompt**: Designer bed headboard wall with velvet fabric upholstery panels, warm hanging bedside pendant lamps --ar 16:10

* `card-2.png` — **[CARD]** `--ar 16:10`
  > **Prompt**: Modern floor-to-ceiling sliding wardrobe with lacquered glass doors and gold aluminum handles --ar 16:10

* `card-3.png` — **[CARD]** `--ar 16:10`
  > **Prompt**: Luxury walk-in closet with open clothes hanging racks, glass drawers, vanity mirror with LED strip lighting --ar 16:10

* `card-4.png` — **[CARD]** `--ar 16:10`
  > **Prompt**: Sleek study nook integrated into bedroom design with floating desk, wall shelving, and ergonomic chair --ar 16:10

* `material-1.png` — **[MATERIAL]** `--ar 1:1`
  > **Prompt**: Macro close-up texture of soft suede fabric upholstery --ar 1:1

* `material-2.png` — **[MATERIAL]** `--ar 1:1`
  > **Prompt**: Macro texture of linen finish laminate for interior wardrobe interiors --ar 1:1

* `material-3.png` — **[MATERIAL]** `--ar 1:1`
  > **Prompt**: Macro texture of solid teak wood grain with natural oil finish --ar 1:1

* `material-4.png` — **[MATERIAL]** `--ar 1:1`
  > **Prompt**: Macro view of brushed brass wardrobe handle pull fixture --ar 1:1

---

## 📁 11. Interior Design: Commercial Office
**Target Folder**: `public/images/interior/office/`

* `hero.png` — **[HERO]** `--ar 16:9`
  > **Prompt**: Modern corporate reception lobby in Pune. Curved reception desk and corporate accent wall on right 60%, soft clean light background on left 40% --ar 16:9

* `card-1.png` — **[CARD]** `--ar 16:10`
  > **Prompt**: Contemporary office reception desk with company branding wall, acoustic ceiling baffle panels, warm welcoming light --ar 16:10

* `card-2.png` — **[CARD]** `--ar 16:10`
  > **Prompt**: Open-plan corporate office workstation setup with acoustic privacy dividers, ergonomic seating, cable management --ar 16:10

* `card-3.png` — **[CARD]** `--ar 16:10`
  > **Prompt**: Executive conference board room with modern wooden table, glass partition walls, integrated presentation TV display --ar 16:10

* `card-4.png` — **[CARD]** `--ar 16:10`
  > **Prompt**: Managing Director private cabin interior featuring modern desk, veneer wall decor, comfortable leather chairs --ar 16:10

* `material-1.png` — **[MATERIAL]** `--ar 1:1`
  > **Prompt**: Macro texture shot of office acoustic wall paneling in dark slate grey --ar 1:1

* `material-2.png` — **[MATERIAL]** `--ar 1:1`
  > **Prompt**: Macro close-up of double-glazed office glass partition joint with matte black aluminum frame --ar 1:1

* `material-3.png` — **[MATERIAL]** `--ar 1:1`
  > **Prompt**: Macro close-up of anodized bronze metal trim finish --ar 1:1

* `material-4.png` — **[MATERIAL]** `--ar 1:1`
  > **Prompt**: Macro texture shot of commercial vinyl flooring plank in light grey oak pattern --ar 1:1

---

## 📁 12. Interior Design: Turnkey Home Interiors
**Target Folder**: `public/images/interior/turnkey-home-interiors/`

* `hero.png` — **[HERO]** `--ar 16:9`
  > **Prompt**: Panoramic wide shot of a luxury 3BHK turnkey apartment interior in Pune. Living and dining area on right 60%, clean wall and window sunlight on left 40% --ar 16:9

* `room-living.png` — **[ROOM]** `--ar 16:9`
  > **Prompt**: Fully styled luxury living room interior, L-shaped sofa, marble center table, warm ceiling lights, floor-to-ceiling balcony curtains --ar 16:9

* `room-kitchen.png` — **[ROOM]** `--ar 16:9`
  > **Prompt**: Complete turnkey modular kitchen with built-in appliances, quartz countertops, high-gloss cabinets --ar 16:9

* `room-bedroom.png` — **[ROOM]** `--ar 16:9`
  > **Prompt**: Master bedroom with upholstered bed, full wardrobe unit, side tables, ambient warm lighting --ar 16:9

* `room-guest.png` — **[ROOM]** `--ar 16:9`
  > **Prompt**: Guest bedroom with compact wardrobe, cozy queen bed, wall mounted TV unit --ar 16:9

* `room-dining.png` — **[ROOM]** `--ar 16:9`
  > **Prompt**: Modern 6-seater marble dining table with upholstered chairs and contemporary chandelier fixture --ar 16:9

* `material-1.png` — **[MATERIAL]** `--ar 1:1`
  > **Prompt**: Macro texture shot of premium veneer paneling --ar 1:1

* `material-2.png` — **[MATERIAL]** `--ar 1:1`
  > **Prompt**: Macro texture shot of high-pressure decorative laminate --ar 1:1

* `material-3.png` — **[MATERIAL]** `--ar 1:1`
  > **Prompt**: Macro close-up of engineered quartz countertop surface texture --ar 1:1

* `material-4.png` — **[MATERIAL]** `--ar 1:1`
  > **Prompt**: Macro close-up of soft-close Blum cabinet drawer runner slide --ar 1:1

---

## 📁 13. Interior Overview Page
**Target Folder**: `public/images/interior/overview/`

* `hero.png` — **[HERO]** `--ar 16:9`
  > **Prompt**: Establishing wide-angle photograph of an award-winning residential interior project on right 60%, soft clean background on left 40% --ar 16:9

* `style-1.png` — **[CARD]** `--ar 16:10`
  > **Prompt**: Contemporary style living room interior featuring sleek handleless furniture, neutral tones, pop color cushions --ar 16:10

* `style-2.png` — **[CARD]** `--ar 16:10`
  > **Prompt**: Minimalist style interior living space with uncluttered layout, hidden storage, serene monochromatic palette --ar 16:10

* `style-3.png` — **[CARD]** `--ar 16:10`
  > **Prompt**: Classic traditional Indian luxury interior with rich teak wood carvings, brass floor lamps, warm traditional accents --ar 16:10

* `style-4.png` — **[CARD]** `--ar 16:10`
  > **Prompt**: Industrial loft interior with exposed brick accent wall, matte metal shelving, concrete texture floor, warm Edison bulb lamps --ar 16:10

---

## 📁 14. Company Pages (About, Team, Contact, Inquiry, Certifications, Gallery, Projects, Blog)

### Target Folder: `public/images/about/`
* `hero-about.png` — **[HERO]** `--ar 16:9`
  > **Prompt**: Modern architectural office studio in Pune on right 60%, smooth neutral background on left 40% --ar 16:9

* `office-team.png` — **[PORTRAIT BLOCK]** `--ar 4:5`
  > **Prompt**: Candid portrait of an Indian civil engineer and interior designer collaborating over site drawings at a desk --ar 4:5

* `timeline-2019-founding.png` — **[DOC PHOTO]** `--ar 4:3`
  > **Prompt**: Authentic early project site meeting from 2019, founding engineers reviewing blue prints on a residential plot --ar 4:3

* `timeline-2022-division-split.png` — **[DOC PHOTO]** `--ar 4:3`
  > **Prompt**: Team strategy meeting in a design studio discussing expansion into Construction and Interior divisions --ar 4:3

* `timeline-2024-scale.png` — **[DOC PHOTO]** `--ar 4:3`
  > **Prompt**: Active modern multi-site construction management hub, bustling team environment --ar 4:3

* `office-exterior.png` — **[DOC PHOTO]** `--ar 4:3`
  > **Prompt**: Modern commercial office building exterior in Narhe, Pune during clear daytime --ar 4:3

* `team-site-review.png` — **[DOC PHOTO]** `--ar 4:3`
  > **Prompt**: Zemitech Urban team members with safety helmets conducting a quality inspection on site --ar 4:3

* `design-studio.png` — **[DOC PHOTO]** `--ar 4:3`
  > **Prompt**: Interior design workspace with material sample trays, mood boards, color swatches, 3D workstations --ar 4:3

* `site-walkthrough.png` — **[DOC PHOTO]** `--ar 4:3`
  > **Prompt**: Project manager walking a client through a newly finished luxury apartment site --ar 4:3

---

### Target Folder: `public/images/team/`
* `hero-team.png` — **[HERO]** `--ar 16:9`
  > **Prompt**: Professional engineering & design office workspace on right 60%, soft clean light on left 40% --ar 16:9

---

### Target Folder: `public/images/projects/`
* `hero-projects.png` — **[HERO]** `--ar 16:9`
  > **Prompt**: Showcase of a modern architectural home facade on right 60%, clear soft sky on left 40% --ar 16:9

---

### Target Folder: `public/images/gallery/`
* `hero-gallery.png` — **[HERO]** `--ar 16:9`
  > **Prompt**: Striking luxury living room interior showcase on right 60%, clean backdrop on left 40% --ar 16:9

---

### Target Folder: `public/images/contact/`
* `hero-contact.png` — **[HERO]** `--ar 16:9`
  > **Prompt**: Modern corporate reception desk in Narhe, Pune on right 60%, calm soft lighting on left 40% --ar 16:9

* `office-exterior.png` — **[DOC PHOTO]** `--ar 4:3`
  > **Prompt**: Entrance and exterior of Zemitech Urban corporate office building in Pune --ar 4:3

---

### Target Folder: `public/images/inquiry/`
* `hero-inquiry.png` — **[HERO]** `--ar 16:9`
  > **Prompt**: Warm client greeting scene in a modern interior design studio on right 60%, clean lighting on left 40% --ar 16:9

* `consultation-call.png` — **[DOC PHOTO]** `--ar 4:3`
  > **Prompt**: Friendly client consultant at a desk on a video/phone consultation with floor plans on table --ar 4:3

---

### Target Folder: `public/images/certifications/`
* `hero-certifications.png` — **[HERO]** `--ar 16:9`
  > **Prompt**: Civil engineer holding digital tablet conducting structural quality audit on site on right 60%, soft blue sky on left 40% --ar 16:9

* `quality-check-structural.png` — **[DOC PHOTO]** `--ar 4:3`
  > **Prompt**: Quality assurance engineer measuring RCC column alignment with digital callipers and laser measure --ar 4:3

* `quality-check-electrical.png` — **[DOC PHOTO]** `--ar 4:3`
  > **Prompt**: Certified electrician testing electrical panel circuit connections with multimeter on site --ar 4:3

* `quality-check-interior-installation.png` — **[DOC PHOTO]** `--ar 4:3`
  > **Prompt**: Interior quality auditor checking cabinet shutter alignment with spirit level tool --ar 4:3

* `quality-check-interior-finish.png` — **[DOC PHOTO]** `--ar 4:3`
  > **Prompt**: Inspector examining smooth acrylic wall paint surface finish under inspection lamp --ar 4:3

* `site-safety-ppe.png` — **[DOC PHOTO]** `--ar 4:3`
  > **Prompt**: Site engineers and workers wearing yellow hard hats, reflective safety vests, safety boots on active construction site --ar 4:3

---

### Target Folder: `public/images/blog/`
* `hero-blog.png` — **[HERO]** `--ar 16:9`
  > **Prompt**: Architectural blueprints, material swatches, iPad with 3D render on right 60%, soft backdrop on left 40% --ar 16:9

---

### Target Folder: `public/images/services/`
* `service-villa.png` — **[SERVICE TILE]** `--ar 16:9`
  > **Prompt**: Modern luxury independent villa facade in Pune, clear daylight --ar 16:9

* `service-civil.png` — **[SERVICE TILE]** `--ar 16:9`
  > **Prompt**: Structural RCC building frame under construction with steel rebar scaffolding --ar 16:9

* `service-industrial.png` — **[SERVICE TILE]** `--ar 16:9`
  > **Prompt**: Modern industrial steel warehouse structure exterior --ar 16:9

* `service-kitchen.png` — **[SERVICE TILE]** `--ar 16:9`
  > **Prompt**: Finished luxury modular kitchen with quartz island --ar 16:9

* `service-living.png` — **[SERVICE TILE]** `--ar 16:9`
  > **Prompt**: Modern living room interior with custom TV wall paneling --ar 16:9

* `service-bedroom.png` — **[SERVICE TILE]** `--ar 16:9`
  > **Prompt**: Styled master bedroom interior with upholstered headboard --ar 16:9

* `service-turnkey.png` — **[SERVICE TILE]** `--ar 16:9`
  > **Prompt**: Wide interior view of complete turnkey 3BHK home interior --ar 16:9

---

### Target Folder: `public/images/og/`
* `zemitech-urban-og.png` — **[OG]** `--ar 1.91:1` | `1200x630`
  > **Prompt**: Sleek social media banner featuring a modern villa exterior and luxury interior split composition, high contrast navy blue ambient lighting, architectural Digest standard --ar 1.91:1

---

## ⚡ Quick Checklist for Generating & Placing Images:
1. Save all generated images as `.png` format.
2. Maintain the target resolution & aspect ratio specified for each category.
3. Place each generated file into the exact path specified above inside the `public/images/` directory.
4. Once placed in the directory, the website will automatically load the real images without requiring any code modifications!
