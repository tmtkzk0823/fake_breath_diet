Rails.application.routes.draw do
  root 'home#top'

  get 'action', to: 'breath_actions#action'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
