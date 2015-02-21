# Be sure to restart your server when you modify this file.

# Add new mime types for use in respond_to blocks:
# Mime::Type.register "text/richtext", :rtf

Mime::Type.register "video/mp4", :mp4
MIME::Types.add(MIME::Type.from_array("video/mp4", %(mp4)))
Mime::Type.register "video/ogg", :ogv
MIME::Types.add(MIME::Type.from_array("video/ogg", %(ogv)))
Mime::Type.register "video/webm", :webm
MIME::Types.add(MIME::Type.from_array("video/webm", %(webm)))

# Rack::Mime::MIME_TYPES.merge!({
#   ".ogg"     => "application/ogg",
#   ".ogx"     => "application/ogg",
#   ".ogv"     => "video/ogg",
#   ".oga"     => "audio/ogg",
#   ".mp4"     => "video/mp4",
#   ".m4v"     => "video/mp4",
#   ".mp3"     => "audio/mpeg",
#   ".m4a"     => "audio/mpeg"
# })
