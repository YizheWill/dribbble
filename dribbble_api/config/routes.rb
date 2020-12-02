Rails.application.routes.draw do
  resources :collections
  resources :image_tags
  resources :tags
  resources :likes
  resources :comments
  resources :shots
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
