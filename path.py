import os

filePath = os.getcwd()
folders = os.listdir(filePath + '/tracks')
print(folders[1:])
paths = os.listdir(filePath + '/tracks/' + folders[-1])
# paths.sort()
for i in range(len(paths)):
    paths[i] = paths[i][:8]
print(paths)
