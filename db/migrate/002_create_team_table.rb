class CreateTeamTable < ActiveRecord::Migration[5.0]
    def change 
        create_table :teams do |t|
            t.string :pokemon_1
            t.string :pokemon_2
            t.string :pokemon_3
            t.string :team_name
            
            t.timestamps
        end
    end
end