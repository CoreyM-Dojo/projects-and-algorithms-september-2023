import os
import requests
from PIL import Image
from io import BytesIO

save_directory = "week2/images"

def get_all_pokemon_data():
    response = requests.get("https://pokeapi.co/api/v2/pokemon?limit=500")
    # print(response.json())
    return response.json()["results"]

def get_pokemon_data(url):
    response = requests.get(url)
    data = response.json()
    return data
    
def make_images(pokemon):
    image_url = pokemon["sprites"]["other"]["official-artwork"]["front_default"]
    response = requests.get(image_url)
    
    if (response.status_code == 200):
        
        image_data = BytesIO(response.content)
        print(image_data)
        image = Image.open(image_data)
        print("Name", pokemon["name"])
        filename = os.path.basename(pokemon["name"] + ".png")
        print(os.getcwd())
        save_path = os.path.join(save_directory, filename)
        
        image.save(save_path)
        print("Image saved:", filename)
    else:
        print("Image not saved")

pokemon_list = get_all_pokemon_data()
# print(pokemon_list)

for pokemon in pokemon_list:
    make_images(get_pokemon_data(pokemon["url"]))
