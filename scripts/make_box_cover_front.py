from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont


ROOT = Path(__file__).resolve().parents[1]
INPUT = ROOT / "images/box-cover/charlotte-guillotine-cover-illustration.png"
OUTPUT = ROOT / "images/box-cover/box-cover-front-v1.png"
FONT_PATH = Path("/System/Library/Fonts/AppleSDGothicNeo.ttc")


def fit_font(text: str, max_width: int, start_size: int) -> ImageFont.FreeTypeFont:
    size = start_size
    while size > 20:
        font = ImageFont.truetype(str(FONT_PATH), size=size, index=8)
        left, top, right, bottom = ImageDraw.Draw(Image.new("RGBA", (1, 1))).textbbox((0, 0), text, font=font, stroke_width=4)
        if right - left <= max_width:
            return font
        size -= 4
    return ImageFont.truetype(str(FONT_PATH), size=size, index=8)


def main() -> None:
    image = Image.open(INPUT).convert("RGBA")
    width, height = image.size

    overlay = Image.new("RGBA", image.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    # Bottom title band, kept translucent so the illustration remains visible.
    band_h = int(height * 0.26)
    for y in range(height - band_h, height):
        alpha = int(215 * ((y - (height - band_h)) / band_h) ** 1.5)
        draw.line((0, y, width, y), fill=(14, 8, 18, alpha))

    # Subtle vignette and premium board-game cover border.
    vignette = Image.new("L", image.size, 0)
    vdraw = ImageDraw.Draw(vignette)
    margin = int(min(width, height) * 0.08)
    vdraw.rounded_rectangle((margin, margin, width - margin, height - margin), radius=60, fill=255)
    vignette = vignette.filter(ImageFilter.GaussianBlur(70))
    dark = Image.new("RGBA", image.size, (0, 0, 0, 90))
    image = Image.composite(image, Image.alpha_composite(image, dark), vignette)
    image = Image.alpha_composite(image, overlay)

    draw = ImageDraw.Draw(image)
    gold = (235, 200, 121, 255)
    deep = (55, 20, 34, 255)
    pale = (255, 238, 188, 255)
    border = int(width * 0.018)
    draw.rounded_rectangle((border, border, width - border, height - border), radius=22, outline=gold, width=4)
    draw.rounded_rectangle((border + 12, border + 12, width - border - 12, height - border - 12), radius=14, outline=(255, 232, 170, 120), width=1)

    title = "삼류 악녀는 싫어!"
    font = fit_font(title, int(width * 0.78), int(height * 0.125))
    bbox = draw.textbbox((0, 0), title, font=font, stroke_width=5)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    x = (width - tw) // 2
    y = height - band_h + (band_h - th) // 2 - int(height * 0.005)

    # Soft shadow, dark outline, and warm highlight for legible cover typography.
    draw.text((x + 6, y + 9), title, font=font, fill=(0, 0, 0, 160), stroke_width=7, stroke_fill=(0, 0, 0, 150))
    draw.text((x, y), title, font=font, fill=gold, stroke_width=5, stroke_fill=deep)
    draw.text((x, y - 2), title, font=font, fill=pale, stroke_width=0)

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    image.convert("RGB").save(OUTPUT, quality=96)


if __name__ == "__main__":
    main()
