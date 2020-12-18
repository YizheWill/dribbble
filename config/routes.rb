Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: %i(index create show destroy update) do
        resources :comments, only: :index
        resources :collections, only: :index
        resources :followings, only: :index
      end
      resources :shots, only: %i(index create show destroy update) do
        resources :comments, only: :index
        resources :shotlikes, only: :index
      end
      resource :session, only: %i(create destroy)
      resources :collections, only: %i(show destroy create update)
      resources :comments, only: %i(index create destroy) do
        resources :commentlikes, only: :index
      end
      resources :shotlikes, only: %i(create destroy)
      resources :commentlikes, only: %i(create destroy)
      resources :follows, only: %i(create destroy)
      delete '/follows', to: 'follows#destroy'
      delete '/shotlikes', to: 'shotlikes#destroy'
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'welcome#index'
  match '*path', to: 'welcome#index', via: [:get]
end
