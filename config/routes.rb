Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'shots/show'
      get 'shots/create'
      get 'shots/update'
      get 'shots/destroy'
    end
  end
  get 'shots/show'
  get 'shots/create'
  get 'shots/update'
  get 'shots/destroy'
  get 'shot/show'
  get 'shot/create'
  get 'shot/update'
  get 'shot/destroy'
  namespace :api do
    namespace :v1 do
      resources :users, only: %i(index create show destroy update)
      resource :session, only: %i(create destroy)
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'welcome#index'
  match '*path', to: 'welcome#index', via: [:get]
end
