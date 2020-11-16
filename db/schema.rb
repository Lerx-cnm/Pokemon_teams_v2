# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 3) do

  create_table "pokemons", force: :cascade do |t|
    t.string "name"
    t.string "pok_type"
    t.integer "dex_num"
    t.integer "weakness_id"
    t.integer "strength_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "strengths", force: :cascade do |t|
    t.string "main_type"
    t.string "stre1"
    t.string "stre2"
  end

  create_table "weaknesses", force: :cascade do |t|
    t.string "main_type"
    t.string "weak1"
    t.string "weak2"
  end

end
