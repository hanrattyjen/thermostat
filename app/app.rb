require 'sinatra/base'
require_relative './models/setting'

class Thermostat < Sinatra::Base

  enable :sessions

  get '/' do
    @setting = Setting.last
    p @setting
    erb(:index)
  end

  post '/save' do

    @setting = Setting.create(currenttemperature: params[:currenttemperature], powersaving: params[:powersaving], city: params[:city])

  end


  run! if app_file == $0
end
