require 'sinatra/base'
require_relative './models/setting'

class Thermostat < Sinatra::Base

  enable :sessions

  get '/' do
    redirect to '/index'
  end

  post '/save' do
    # p params[:currenttemperature]
    # p params[:powersaving]
    # p params[:city]
    @setting = Setting.new(currenttemperature: params[:currenttemperature], powersaving: params[:powersaving], city: params[:city])
    @setting.save
    p @setting
    redirect to '/index'
  end



  get '/settings' do
    p @setting
    erb(:index)
  end

  get '/index' do
    p params[:currenttemperature]
    erb(:index)
  end

  run! if app_file == $0
end
