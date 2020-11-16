class CreateWeaknessTable < ActiveRecord::Migration[5.0]
    def change
        create_table :weaknesses do |t|
            t.string :main_type
            t.string :weak1
            t.string :weak2
        end
    end
end