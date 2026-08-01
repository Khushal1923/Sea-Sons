import os
import subprocess
import imageio_ffmpeg

def crop_video():
    ffmpeg_exe = imageio_ffmpeg.get_ffmpeg_exe()
    input_file = os.path.abspath("public/videos/hero-reel.mp4")
    output_file = os.path.abspath("public/videos/hero-reel-cropped.mp4")
    
    # Crop out the top 20% of the video frame
    # filter: crop=w=in_w:h=in_h*0.80:x=0:y=in_h*0.20
    cmd = [
        ffmpeg_exe,
        "-y",
        "-i", input_file,
        "-vf", "crop=in_w:in_h*0.78:0:in_h*0.22",
        "-c:v", "libx264",
        "-crf", "20",
        "-preset", "fast",
        "-c:a", "copy",
        output_file
    ]
    
    print("Running ffmpeg crop command:", " ".join(cmd))
    result = subprocess.run(cmd, capture_output=True, text=True)
    print("Return code:", result.returncode)
    if result.returncode == 0:
        print("Successfully created cropped video at:", output_file)
    else:
        print("Error:", result.stderr)

if __name__ == "__main__":
    crop_video()
