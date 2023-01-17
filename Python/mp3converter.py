import moviepy.editor
import os
path=os.chdir("F:\zhr\ytd")
for file in os.listdir(path):
    video=moviepy.editor.VideoFileClip(file)
    audio=video.audio
    audio.write_audiofile(f'F:\\zhr\\ytd\\{file.split(".")[0]}.mp3')
    # print(file)