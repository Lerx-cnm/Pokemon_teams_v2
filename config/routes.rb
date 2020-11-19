Rails.application.routes.draw do

  resources :pokemon, only: [:index, :show]
  resources :weakness, only: :show
  resources :strength, only: :show
end
