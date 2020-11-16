class PokemonController < ApplicationController
    def index
        pokemons = Pokemon.all 
        # binding.pry
        render json: pokemons.to_json(except: [:created_at, :updated_at])
    end

    def show
        pokemon = Pokemon.find_by(dex_num: params[:id])
        render json: pokemon.to_json(except: [:created_at, :updated_at])
    end
end