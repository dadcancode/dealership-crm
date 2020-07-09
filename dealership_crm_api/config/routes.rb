Rails.application.routes.draw do
  # resources :tasks
  resources :sprocesses do
    resources :tasks
  end
  resources :vehicles
  resources :prospects
  resources :users do
    resources :prospects
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
