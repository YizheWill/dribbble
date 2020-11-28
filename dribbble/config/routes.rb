Rails.application.routes.draw do
  resources :shots
  devise_for :users, controllers: { registration: 'registration' }
  root 'shots#index'
end
