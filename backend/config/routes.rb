Rails.application.routes.draw do
  resources :questions
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do 
    namespace :v1 do 
      resources :knights
      resources :questions
    end 
  end 
end
