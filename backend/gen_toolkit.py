import asyncio
import os
from dotenv import load_dotenv
from emergentintegrations.llm.openai.image_generation import OpenAIImageGeneration

load_dotenv()

OUT = "/app/frontend/public/projects"
STYLE = (
    "Photorealistic 3D render in Blender / Cinema4D style, dramatic isometric three-quarter view clearly showing the object's sides, thickness and volume. "
    "Glossy dark metallic and matte black materials with realistic reflections, ambient occlusion, dramatic studio lighting, "
    "subtle purple and magenta rim lighting accents. Floating product shot isolated on a pure solid black background (#000000), no shadow on ground, no text, no watermark. "
    "High fidelity, octane render, 8k."
)

PROMPTS = {
    "toolkit-keyboard.png": "A sleek minimalist wireless mechanical keyboard with a matte black aluminum body and dark grey keycaps, subtle purple backlight glowing between the keys. " + STYLE,
    "toolkit-mouse.png": "A high-end premium wireless computer mouse with elegant ergonomic curves, matte dark metallic finish, glossy scroll wheel, thin glowing purple accent line. " + STYLE,
    "toolkit-headphones.png": "Premium studio over-ear headphones with dark metallic yokes, matte black leather ear cushions, thin glowing magenta rim accent ring on each ear cup. " + STYLE,
    "toolkit-sphere.png": "A perfectly polished mirror chrome sphere with sharp reflective highlights and purple-magenta studio light reflections. " + STYLE,
    "toolkit-torus.png": "A frosted glass torus ring, translucent glassy material with subtle purple and magenta refraction and inner glow. " + STYLE,
}


async def main():
    gen = OpenAIImageGeneration(api_key=os.environ["EMERGENT_LLM_KEY"])
    for name, prompt in PROMPTS.items():
        print(f"generating {name}...", flush=True)
        try:
            images = await gen.generate_images(prompt=prompt, model="gpt-image-1", number_of_images=1, quality="high")
            with open(os.path.join(OUT, name), "wb") as f:
                f.write(images[0])
            print(f"saved {name} ({len(images[0])} bytes)", flush=True)
        except Exception as e:
            print(f"FAILED {name}: {e}", flush=True)


asyncio.run(main())
print("ALL DONE")
