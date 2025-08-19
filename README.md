# Akumacon Content Management Guide

This project uses **Netlify CMS** to manage Akumacon's website content. The CMS provides a user-friendly dashboard where you can edit all aspects of the convention's website without touching code.

---

## 🔑 Accessing the CMS

1. Go to: `https://akumacon.com/admin`
2. Log in using your GitHub account
3. Once logged in, you'll see the **CMS dashboard** with all editable sections

---

## 📝 Managing Content

### Homepage Content

- **Hero Banner**: Update the main banner image and ticket button text
- **About Section**: Edit the description and logo
- **Charity Partners**: Add or edit charity information and images
- **Location**: Update venue details and map information
- **Updates**: Add new announcements and event updates
- **Countdown**: Set the event start date

### Guest Information

- **Special Guests**: Add and manage guest profiles
  - Name, bio, photos
  - Social media links
  - Appearance schedule

### Info Page

- **Maps**: Update venue and area maps
- **Trade Hall**: Edit trader information
- **Cosplay**: Update cosplay competition rules
- **Special Guests Tab**: Manage guest appearances schedule

### Gallery

- Organized by year (2025, 2024, 2023, 2020, 2019, 2018)
- Each year divided into:
  - Friday
  - Saturday
  - Sunday
- Upload and organize photos for each day
- Add titles and descriptions to images

### Applications

- **Banner Image**: Set the main applications page banner
- Manage application sections for:
  - Cosplay Masquerade
  - Karaoke
  - Volunteers
  - Panel Hosting
  - Artist Alley

### More Page

- **FAQs**: Add/edit frequently asked questions
- **Parents Section**: Update information for parents
- **Crew**: Manage crew member listings
- **Rules**: Edit convention rules and guidelines

---

## 📸 Image Management

1. Click **Media** in the top navigation
2. Upload your image
3. Copy the generated path
4. Paste into the appropriate image field
5. Images are stored in `/public/images/`

**Recommended Image Sizes**:

- Hero Banners: 1920x1080px
- Guest Photos: 800x800px
- Gallery Images: 1200x800px
- Section Icons: 400x400px

---

## 🎨 Theme Colors

You can update the site's color scheme in the **Theme Colors** section:

- Primary
- Secondary
- Tertiary
- Highlight
- Lowlight
- Shadow Color
- CTA (Call to Action)
- Dark
- Light

---

## 📂 Content Structure

All content is stored as JSON files in `frontend/public/content/`:

- `home.json` → Homepage content
- `info.json` → Information page content
- `gallery.json` → Photo gallery by year/day
- `more.json` → FAQs, rules, crew info
- `applications.json` → Application forms and info
- `guests.json` → Guest profiles and schedules
- `theme.json` → Site color scheme

---

## 🚀 Publishing Changes

1. Make your edits in the CMS
2. Preview changes using the preview pane
3. Click "Publish" to make the changes live
4. The site will automatically rebuild with your updates

For support or questions about content management, please contact the website administrator.
