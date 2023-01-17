import os
path=os.chdir("F:\\ldisk\\Pictures\\wallpapers\\3D Picture")
i=1
for file in os.listdir(path):
    if file.lower().find(".jpg")!=-1:
        new_filename="Wallpaper({}).jpg".format(i)
        print(new_filename)
        i+=1
        os.rename(file,new_filename)