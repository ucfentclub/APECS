# How to Connect Your Zoho Forms to APECS Website

## 🎯 Quick Overview

You need to get the **iframe embed URL** from your Zoho Forms and paste it into the Registration component.

---

## 📋 Step-by-Step Instructions

### Step 1: Get Your Zoho Form Embed URL

1. **Log in to Zoho Forms:** [https://forms.zoho.com](https://forms.zoho.com)

2. **Find your form** (e.g., "APECS Ticket Registration")

3. **Click the "Share" button** (top right, or in the form menu)

4. **Click "Embed" tab**

5. **Look for the iframe code** - it will look like this:
   ```html
   <iframe src="https://forms.zohopublic.com/yourorg/form/FormName/formperma/xyz123">
   </iframe>
   ```

6. **Copy ONLY the URL** from inside the `src="..."` part
   - ✅ Example: `https://forms.zohopublic.com/yourorg/form/APECSTickets/formperma/xyz123`
   - ❌ Don't copy the whole iframe tag

### Step 2: Update the Registration Component

1. **Open:** `src/components/Registration.tsx`

2. **Find line 212** - it looks like this:
   ```javascript
   src={showTicketForm ? 'YOUR_TICKET_FORM_URL_HERE' : 'YOUR_VENDOR_FORM_URL_HERE'}
   ```

3. **Replace with your actual URLs:**
   ```javascript
   src={showTicketForm ? 'https://forms.zohopublic.com/yourorg/form/TicketForm/formperma/abc123' : 'https://forms.zohopublic.com/yourorg/form/VendorForm/formperma/def456'}
   ```

4. **Save the file**

5. **Rebuild and deploy** (if already on GitHub Pages) or test locally with `npm run dev`

### Step 3: Test It

1. Go to your website's registration section
2. Click "Register Now"
3. Your Zoho form should appear!

---

## 🔍 Finding the Exact URL Format

Your Zoho form embed URL will be in **ONE** of these formats:

### Format 1: Standard Zoho Forms
```
https://forms.zohopublic.com/ACCOUNT_NAME/form/FORM_NAME/formperma/UNIQUE_ID
```

### Format 2: Custom Domain
```
https://forms.yourdomain.com/form/FORM_NAME/formperma/UNIQUE_ID
```

### Format 3: Legacy Format
```
https://forms.zohopublic.com/ACCOUNT_NAME/form/FORM_NAME?zf_rszfm=1
```

---

## 🎯 Real Example

Let's say your Zoho embed code looks like this:

```html
<iframe 
  aria-label='APECS Ticket Registration' 
  frameborder="0" 
  style="height:500px;width:99%;border:none;" 
  src='https://forms.zohopublic.com/ucfclub/form/APECSTickets/formperma/FzAx1f2Lvb8K_hQ6gZKNdUaP3j4m'>
</iframe>
```

**You would copy:**
```
https://forms.zohopublic.com/ucfclub/form/APECSTickets/formperma/FzAx1f2Lvb8K_hQ6gZKNdUaP3j4m
```

**And update Registration.tsx line 212 to:**
```javascript
src={showTicketForm ? 
  'https://forms.zohopublic.com/ucfclub/form/APECSTickets/formperma/FzAx1f2Lvb8K_hQ6gZKNdUaP3j4m' : 
  'https://forms.zohopublic.com/ucfclub/form/VendorApp/formperma/AnotherUniqueID'
}
```

---

## 🚫 Common Mistakes That Cause 404 Errors

### ❌ Wrong - Including the entire iframe tag:
```javascript
src={'<iframe src="https://forms.zohopublic.com/..." ></iframe>'}
```

### ❌ Wrong - Missing the formperma part:
```javascript
src={'https://forms.zohopublic.com/ucfclub/form/MyForm'}
```

### ❌ Wrong - Adding extra parameters:
```javascript
src={'https://forms.zohopublic.com/form/MyForm?embedded=true&extra=stuff'}
```

### ✅ Correct - Just the clean URL:
```javascript
src={'https://forms.zohopublic.com/ucfclub/form/MyForm/formperma/abc123'}
```

---

## 🔧 Troubleshooting 404 Not Found Error

### Issue: "404 Not Found" When Opening Form

This means the URL is incorrect or the form isn't publicly accessible.

**Solution Checklist:**

1. **✅ Check form is published:**
   - In Zoho Forms, click on your form
   - Look for a toggle/switch that says "Active" or "Published"
   - Make sure it's turned ON

2. **✅ Check form permissions:**
   - Click on your form in Zoho
   - Go to **Settings** → **Properties** → **Form Properties**
   - Find "Who can fill this form"
   - Select **"Anyone"** (not "Only people in my organization")

3. **✅ Get the correct URL:**
   - Click **Share** button
   - Click **Embed** tab
   - Look for the iframe code
   - Copy ONLY the URL from `src="..."`

4. **✅ Test the URL directly:**
   - Open a new browser tab
   - Paste your Zoho form URL
   - Press Enter
   - If you see your form → URL is correct ✅
   - If you see 404 → URL is wrong or form isn't public ❌

5. **✅ Copy-paste carefully:**
   - Don't type the URL manually
   - Copy directly from Zoho
   - Watch for hidden spaces or characters
   - Make sure you got the whole URL including the unique ID at the end

---

## 📝 If You Only Have One Form

If you only have a **ticket registration form** and no vendor form yet:

**Option 1:** Use the same form for both buttons:
```javascript
src={showTicketForm ? 'YOUR_FORM_URL' : 'YOUR_FORM_URL'}
```

**Option 2:** Hide the vendor button:
- Open `src/components/Registration.tsx`
- Find lines 142-163 (the vendor card)
- Delete or comment out that entire section

---

## 🎨 Adjusting Form Display

### Form is Too Small/Large

Edit line 208 in Registration.tsx:
```javascript
style={{
  height: '1000px',  // Make it bigger
  // or
  height: '600px',   // Make it smaller
  width: '100%',
  border: 'none',
}}
```

### Form Doesn't Show Scroll

Make sure you didn't add `overflow: hidden` anywhere

---

## 📸 What You Should See in Zoho

When you click "Share" → "Embed" in Zoho Forms, you should see something like this:

```html
<!-- Paste this code in your HTML editor -->
<iframe 
  aria-label='My Form' 
  frameborder="0" 
  style="height:500px;width:99%;border:none;" 
  src='https://forms.zohopublic.com/youraccountname/form/YourFormName/formperma/A1b2C3d4E5f6G7h8I9j0K1l2M3n4O5p6'>
</iframe>
```

**Copy this part:**
```
https://forms.zohopublic.com/youraccountname/form/YourFormName/formperma/A1b2C3d4E5f6G7h8I9j0K1l2M3n4O5p6
```

---

## 🆘 Still Getting 404?

If you've checked everything above and still getting 404:

1. **Verify form URL works:**
   - Open new browser tab
   - Paste your Zoho form URL
   - If it shows 404 there too → Problem is with Zoho form settings
   - If it works there but not on website → Problem is with how you pasted it in code

2. **Check for typos:**
   - Make sure URL starts with `https://`
   - No spaces before or after the URL
   - All characters copied correctly

3. **Create a test form:**
   - Make a simple test form in Zoho
   - Set it to "Anyone can fill"
   - Get its embed URL
   - Try that URL in your code
   - If that works → problem is with your main form settings

4. **Contact Zoho Support:**
   - If form works in browser but gives 404 when embedded
   - Might be a Zoho Forms account setting

---

## ✅ Final Checklist

Before pushing to GitHub or asking for help:

- [ ] My Zoho form is **active/published**
- [ ] Form permission is set to **"Anyone"**
- [ ] I copied **only the URL** from the iframe src
- [ ] URL starts with `https://forms.zohopublic.com/` or similar
- [ ] I can open the URL in a browser and see my form
- [ ] I saved Registration.tsx after editing
- [ ] I rebuilt the site if testing locally (`npm run build`)
- [ ] I checked there are no quotes or spaces around the URL in the code

---

## 📞 Need More Help?

If you're still stuck, send:
1. The exact URL you're using (you can blur your account name if you want)
2. Screenshot of Zoho Forms "Share → Embed" screen
3. Screenshot of the error you're seeing

The issue is almost always:
- Form isn't set to "Anyone can fill"
- URL copied incorrectly
- Form isn't published/active
