class CreatePokemonTable < ActiveRecord::Migration[5.0]
    def change 
        create_table :pokemons do |t|
            t.string :name
            t.string :pok_type
            t.integer :dex_num
            
            t.timestamps
        end
    end
end