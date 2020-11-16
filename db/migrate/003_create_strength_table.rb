class CreateStrengthTable <ActiveRecord::Migration[5.0]
  def change
    create_table :strengths do |t|
        t.string :main_type
        t.string :stre1
        t.string :stre2

    end
  end
end