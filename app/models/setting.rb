require 'data_mapper'
require 'dm-postgres-adapter'

class Setting

  include DataMapper::Resource

  property :id,                 Serial
  property :currenttemperature, Integer
  property :powersaving,       Boolean
  property :city,               String

end

DataMapper.setup(:default, 'postgres://localhost/weather')
DataMapper.finalize
DataMapper.auto_upgrade!
