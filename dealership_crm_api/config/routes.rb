Rails.application.routes.draw do
  # resources :tasks
  resources :sprocesses do
    resources :tasks
  end
  resources :vehicles
  resources :prospects, only: [:index, :show]
  resources :users do
    resources :prospects, only: [:create, :update, :index, :show]
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/vehicles/get_makes/:year', :to => 'vehicles#get_makes'
  get '/vehicles/get_models/:year/:make', :to => 'vehicles#get_models'
end
