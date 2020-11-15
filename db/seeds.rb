# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require_relative 'examples'

def create_poke(hash, type)
    hash.each do |k, v|
      poke = Pokemon.new(name: v, pok_type: type, dex_num: k.to_s.to_i)
      poke.save
    end
end

@pokemon.each do |k, v|
  if k == :Grass
    create_poke(v, k.to_s)
  elsif k == :Water
    create_poke(v, k.to_s)
  elsif k == :Fire
    create_poke(v, k.to_s)
  elsif k == :Bug
    create_poke(v, k.to_s)
  elsif k == :Flying
    create_poke(v, k.to_s)
  elsif k == :Normal
    create_poke(v, k.to_s)
  elsif k == :Poison
    create_poke(v, k.to_s)
  elsif k == :Fighting
    create_poke(v, k.to_s)
  elsif k == :Electric
    create_poke(v, k.to_s)
  elsif k == :Ground
    create_poke(v, k.to_s)
  elsif k == :Dragon
    create_poke(v, k.to_s)
  elsif k == :Ice
    create_poke(v, k.to_s)
  elsif k == :Rock
    create_poke(v, k.to_s)
  elsif k == :Psychic
    create_poke(v, k.to_s)
  elsif k == :Ghost
    create_poke(v, k.to_s)
  end
end

