# How to Edit Featured Speakers

## Location
**File:** `src/components/Speakers.tsx`

This file controls everything about the Featured Speakers section including:
- Speaker names
- Titles/companies
- Photos
- Bios
- Social media links

---

## Quick Start: Edit Speaker Information

### Step 1: Open the File
Open `src/components/Speakers.tsx` in your code editor

### Step 2: Find the `speakers` Array
Look for lines starting around line 17. You'll see:

```javascript
const speakers = [
  {
    name: "Sarah Chen",
    title: "Founder & CEO, TechVentures",
    image: "https://images.unsplash.com/...",
    bio: "Serial entrepreneur with 3 successful exits",
    linkedin: "#",
    twitter: "#"
  },
  // ... more speakers
];
```

### Step 3: Edit Speaker Details
Simply change the text between the quotes:

```javascript
{
  name: "Your Speaker Name",           // Change this
  title: "Their Title & Company",      // Change this
  image: "...",                        // See image instructions below
  bio: "Short bio about them",         // Change this
  linkedin: "https://linkedin.com/in/username",  // Add their LinkedIn
  website: "https://theirwebsite.com"            // Add their website URL
}
```

---

## Using Your Own Images

You have TWO options for speaker images:

### Option A: Use Images from Your Assets Folder (RECOMMENDED)

**Step 1:** Place your speaker photos in `src/assets/`
- Name them something like: `speaker1.jpg`, `speaker2.jpg`, etc.
- Or use descriptive names: `john-doe.jpg`, `jane-smith.png`
- **Best size:** 400x400 pixels or larger (square images work best)
- **Formats:** .jpg, .jpeg, .png, or .webp

**Step 2:** Import the images at the top of the file

Find the import section (around line 8-11) and add:

```javascript
import speaker1 from "@/assets/speaker1.jpg";
import speaker2 from "@/assets/speaker2.jpg";
import speaker3 from "@/assets/speaker3.jpg";
import speaker4 from "@/assets/speaker4.jpg";
```

**Step 3:** Use the imported images in the speakers array

Replace the image URLs with your imported image variables:

```javascript
const speakers = [
  {
    name: "Sarah Chen",
    title: "Founder & CEO, TechVentures",
    image: speaker1,  // ← Changed from URL to imported image
    bio: "Serial entrepreneur with 3 successful exits",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Michael Rodriguez",
    title: "Partner, Horizon Capital",
    image: speaker2,  // ← Changed from URL to imported image
    bio: "Leading investor in early-stage startups",
    linkedin: "#",
    twitter: "#"
  },
  // ... and so on
];
```

### Option B: Use External Image URLs

If your images are hosted online, just replace the URL:

```javascript
{
  name: "Sarah Chen",
  title: "Founder & CEO, TechVentures",
  image: "https://yourwebsite.com/images/speaker1.jpg",  // ← Your URL
  bio: "Serial entrepreneur with 3 successful exits",
  linkedin: "#",
  twitter: "#"
}
```

---

## Adding or Removing Speakers

### To Add a Speaker:

Add a new object to the speakers array:

```javascript
const speakers = [
  // ... existing speakers ...
  {
    name: "New Speaker Name",
    title: "Their Title",
    image: speaker5,  // or image URL
    bio: "Their bio",
    linkedin: "https://linkedin.com/in/username",
    twitter: "https://twitter.com/username"
  }
];
```

### To Remove a Speaker:

Simply delete the entire speaker object (including the curly braces and comma):

```javascript
const speakers = [
  {
    name: "Sarah Chen",
    // ... keep this one
  },
  // DELETE THIS ENTIRE BLOCK to remove Michael Rodriguez:
  // {
  //   name: "Michael Rodriguez",
  //   title: "Partner, Horizon Capital",
  //   image: speaker2,
  //   bio: "Leading investor in early-stage startups",
  //   linkedin: "#",
  //   twitter: "#"
  // },
  {
    name: "Dr. Emily Watson",
    // ... keep this one
  }
];
```

---

## Editing Section Title & Description

To change the section heading, find these lines (around line 65-70):

```javascript
<h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
  Featured Speakers & VCs    {/* ← Change this heading */}
</h2>
<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
  Learn from venture capitalists, successful founders, and innovation leaders shaping Florida's tech ecosystem
  {/* ← Change this description */}
</p>
```

---

## Complete Example

Here's a complete example with local images:

```javascript
// At the top of the file:
import johnDoe from "@/assets/john-doe.jpg";
import janeSmith from "@/assets/jane-smith.jpg";
import bobJohnson from "@/assets/bob-johnson.jpg";
import aliceWilliams from "@/assets/alice-williams.jpg";

import { Linkedin, ExternalLink } from "lucide-react";

const speakers = [
  {
    name: "John Doe",
    title: "Managing Partner, Doe Ventures",
    image: johnDoe,
    bio: "15+ years investing in early-stage tech companies",
    linkedin: "https://linkedin.com/in/johndoe",
    website: "https://doeventures.com"
  },
  {
    name: "Jane Smith",
    title: "CEO, Smith Technologies",
    image: janeSmith,
    bio: "Built and exited two successful SaaS companies",
    linkedin: "https://linkedin.com/in/janesmith",
    website: "https://smithtech.com"
  },
  {
    name: "Bob Johnson",
    title: "Founder, Johnson Capital",
    image: bobJohnson,
    bio: "Angel investor with portfolio of 50+ startups",
    linkedin: "https://linkedin.com/in/bobjohnson",
    website: "https://johnsoncapital.com"
  },
  {
    name: "Alice Williams",
    title: "Partner, Williams & Associates",
    image: aliceWilliams,
    bio: "Specializing in fintech and AI investments",
    linkedin: "https://linkedin.com/in/alicewilliams",
    website: "https://williamsassociates.com"
  }
];
```

---

## Tips for Best Results

1. **Image Quality:** Use high-quality, professional headshots
2. **Consistency:** Keep all images the same size and style
3. **Square Images:** The layout works best with square (1:1) photos
4. **File Size:** Optimize images (under 500KB each) for faster loading
5. **Bio Length:** Keep bios concise (1-2 sentences)
6. **Social Links:** Each speaker shows LinkedIn icon and website icon (external link)

---

## Layout Information

- The speakers display in a **4-column grid** on desktop
- **2 columns** on tablets
- **1 column** on mobile
- The grid automatically adjusts based on the number of speakers
- Each card includes a hover effect that zooms the image slightly

---

## Need More Help?

If you're having trouble:
1. Make sure image file paths are correct
2. Check that imported image names match the file names
3. Ensure all commas and quotes are in place
4. Test the site with `npm run dev` to see changes immediately
5. Check the browser console for any error messages
