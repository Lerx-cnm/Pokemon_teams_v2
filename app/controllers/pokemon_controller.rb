class PokemonController < ApplicationController
    def index
        pokemons = Pokemon.all 
        render json: pokemons.to_json(only: [:name, :dex_num, :pok_type])
    end

    def show
        pokemon = Pokemon.find_by(dex_num: params[:id])
        render json: pokemon.to_json(only: [:name, :dex_num, :pok_type])
    end
end