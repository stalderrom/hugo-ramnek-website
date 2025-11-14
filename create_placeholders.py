#!/usr/bin/env python3
"""Create placeholder images for the Hugo Ramnek website."""

from PIL import Image, ImageDraw, ImageFont
import os

def create_placeholder(width, height, text, filename):
    """Create a placeholder image with the given dimensions and text."""
    # Create image with gray background
    img = Image.new('RGB', (width, height), color='#f3f4f6')
    draw = ImageDraw.Draw(img)

    # Try to use a nice font, fall back to default if not available
    try:
        font_large = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 36)
        font_small = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 24)
    except:
        font_large = ImageFont.load_default()
        font_small = ImageFont.load_default()

    # Calculate text position (centered)
    bbox = draw.textbbox((0, 0), text, font=font_large)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    x = (width - text_width) / 2
    y = (height - text_height) / 2 - 20

    # Draw main text
    draw.text((x, y), text, fill='#6b7280', font=font_large)

    # Draw subtitle
    subtitle = f"{width} x {height} px"
    bbox2 = draw.textbbox((0, 0), subtitle, font=font_small)
    text_width2 = bbox2[2] - bbox2[0]
    x2 = (width - text_width2) / 2
    y2 = y + text_height + 20
    draw.text((x2, y2), subtitle, fill='#9ca3af', font=font_small)

    # Save image
    img.save(filename, 'JPEG', quality=85)
    print(f"Created: {filename}")

# Create directories
os.makedirs('public/covers', exist_ok=True)

# Create Hugo portrait placeholder
create_placeholder(800, 800, "Hugo Ramnek", "public/hugo-ramnek.jpg")

# Create book cover placeholders
books = [
    "die-laengste-nacht",
    "die-schneekugel",
    "das-letzte-von-leopold",
    "meine-ge-ge-generation",
    "der-letzte-badegast",
    "kettenkarussell",
    "momentum",
    "wo-kommen-die-worte-her",
    "gluecksvogel"
]

for book in books:
    title = book.replace("-", " ").title()
    create_placeholder(600, 800, title, f"public/covers/{book}.jpg")

print("\nAll placeholder images created successfully!")
print("Replace these with actual images when available.")
