Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'session/create'
    end
  end
  namespace :api do
    namespace :v1 do
      resources :users, only: %i(index create show destroy update)
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'welcome#index'
  match '*path', to: 'welcome#index', via: [:get]
end
