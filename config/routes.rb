Rails.application.routes.draw do

  resources :pokemon, only: [:index, :show]
  resources :team, only: :show
end
