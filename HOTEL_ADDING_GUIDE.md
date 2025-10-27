# How to Add More Hotels to Accommodations Page

## Location
**File:** `src/pages/Accommodations.tsx`

## Quick Start

### Step 1: Find the hotels array
Open the file and look for the `hotels` array around **line 6**. It currently looks like this:

```javascript
const hotels = [
  {
    name: "Celeste Hotel",
    address: "11730 Research Parkway, Orlando, FL 32826",
    phone: "(407) 434-6000",
    distance: "10 minutes from UCF",
    rate: "TBD",
    amenities: ["Free WiFi", "Pool", "Fitness Center", "Complimentary Breakfast"],
    bookingUrl: "#",
    rating: 4.3
  }
];
```

### Step 2: Add a new hotel
Simply add a comma after the closing brace and add another hotel object:

```javascript
const hotels = [
  {
    name: "Celeste Hotel",
    address: "11730 Research Parkway, Orlando, FL 32826",
    phone: "(407) 434-6000",
    distance: "10 minutes from UCF",
    rate: "TBD",
    amenities: ["Free WiFi", "Pool", "Fitness Center", "Complimentary Breakfast"],
    bookingUrl: "#",
    rating: 4.3
  },
  {
    name: "Hotel Name Here",              // Hotel name
    address: "Street Address, City, FL",   // Full address
    phone: "(407) XXX-XXXX",               // Phone number
    distance: "X minutes from UCF",        // Drive time to UCF
    rate: "TBD",                           // Keep as TBD until rate confirmed
    amenities: ["Amenity 1", "Amenity 2"], // List of amenities
    bookingUrl: "#",                       // Hotel website (or keep as # for now)
    rating: 4.5                            // Hotel rating (1-5)
  }
];
```

### Step 3: Update the heading (if adding 2+ hotels)

When you have **2 or more hotels**, change the heading from singular to plural:

**Find around line 123:**
```javascript
<h2 className="text-3xl font-bold mb-4 text-foreground">Preferred Hotel</h2>
```

**Change to:**
```javascript
<h2 className="text-3xl font-bold mb-4 text-foreground">Preferred Hotels</h2>
```

**Also update the subtitle:**
```javascript
<p className="text-lg text-muted-foreground">
  Conference rates will be available soon. Additional hotel options will be added as partnerships are secured.
</p>
```

**Change to:**
```javascript
<p className="text-lg text-muted-foreground">
  Conference rates will be available soon. These hotels are conveniently located near UCF.
</p>
```

### Step 4: Update the layout (for 2+ hotels)

When you have **2 or more hotels**, change the grid layout:

**Find around line 127:**
```javascript
<div className="max-w-md mx-auto">
```

**Change to:**
```javascript
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
```

This will display hotels in a 2-column grid on larger screens.

### Step 5: Update the hero subtitle (for 2+ hotels)

**Find around line 75:**
```javascript
<p className="text-xl md:text-2xl text-white/90 mb-8">
  Preferred hotel near University of Central Florida for APECS 2026 attendees
</p>
```

**Change to:**
```javascript
<p className="text-xl md:text-2xl text-white/90 mb-8">
  Preferred hotels near University of Central Florida for APECS 2026 attendees
</p>
```

---

## Complete Example with 3 Hotels

```javascript
const hotels = [
  {
    name: "Celeste Hotel",
    address: "11730 Research Parkway, Orlando, FL 32826",
    phone: "(407) 434-6000",
    distance: "10 minutes from UCF",
    rate: "TBD",
    amenities: ["Free WiFi", "Pool", "Fitness Center", "Complimentary Breakfast"],
    bookingUrl: "#",
    rating: 4.3
  },
  {
    name: "Courtyard by Marriott UCF",
    address: "12000 Collegiate Way, Orlando, FL 32817",
    phone: "(407) 513-9000",
    distance: "5 minutes from UCF",
    rate: "TBD",
    amenities: ["Free WiFi", "Fitness Center", "Pool", "Breakfast Available"],
    bookingUrl: "https://www.marriott.com",
    rating: 4.2
  },
  {
    name: "Fairfield Inn & Suites UCF",
    address: "11801 High Tech Avenue, Orlando, FL 32817",
    phone: "(407) 736-2200",
    distance: "7 minutes from UCF",
    rate: "$129/night",
    amenities: ["Free Breakfast", "Free WiFi", "Pool", "Fitness Center"],
    bookingUrl: "https://www.marriott.com",
    rating: 4.1
  }
];
```

---

## Updating Conference Rates

When you secure conference rates, update the `rate` field:

**Before:**
```javascript
rate: "TBD",
```

**After:**
```javascript
rate: "$129/night",
```

---

## Adding Booking Links

When booking URLs are available, update the `bookingUrl` field:

**Before:**
```javascript
bookingUrl: "#",
```

**After:**
```javascript
bookingUrl: "https://www.hotelwebsite.com",
```

---

## Tips

1. **Distance:** Always calculate from UCF main campus
2. **Amenities:** List 3-5 key amenities that attendees care about
3. **Rating:** Use the hotel's average rating from Google/TripAdvisor
4. **Phone:** Include area code (407 for Orlando area)
5. **Rate:** Keep as "TBD" until officially confirmed with hotel

---

## Need Help?

The hotels array is straightforward - just copy an existing hotel object, paste it below with a comma, and update the values. Test your changes with `npm run dev` to see how it looks!
