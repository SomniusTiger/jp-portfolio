Rails.application.routes.draw do
  root 'public#index'

  # Public Pages
  match via: :get, '/about' => 'public#about', as: :about

  # Project Pages
  match via: :get,  '/bu-reel'        =>  'projects#bu-reel',         as: :bu_reel
  match via: :get,  '/dsb'            =>  'projects#dsb',             as: :dsb
  match via: :get,  '/illustrations'  =>  'projects#illustrations',   as: :illustrations
  match via: :get,  '/tap-of-war'     =>  'projects#tap-of-war',      as: :tap_of_war
  match via: :get,  '/vinyl-music'    =>  'projects#vinyl-music',     as: :vinyl_music
  match via: :get,  '/3D'             =>  'projects#ventures-3d',     as: :ventures_3d
  match via: :get,  '/podcasts'       =>  'projects#podcasts',        as: :podcasts

end
