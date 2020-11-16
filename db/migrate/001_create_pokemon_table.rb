class CreatePokemonTable < ActiveRecord::Migration[5.0]
    def change 
        create_table :pokemons do |t|
            t.string :name
            t.string :pok_type
            t.integer :dex_num
            t.integer :weakness_id
            t.integer :strength_id
            
            t.timestamps
        end
    end
end