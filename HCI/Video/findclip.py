from __future__ import print_function
# -*- coding: utf-8 -*-
import cv2  ##加载OpenCV模块
import os
import json
from django.http import HttpResponse
# Standard PySceneDetect imports:
from scenedetect.video_manager import VideoManager
from scenedetect.scene_manager import SceneManager
# For caching detection metrics and saving/loading to a stats file
from scenedetect.stats_manager import StatsManager

# For content-aware scene detection:
from scenedetect.detectors.content_detector import ContentDetector
def findclip(request):
    f2 = request.FILES.get('video')
    # 文件保存路径
    fname = '.\\uploadvideo\\'+f2.name
    with open(fname, 'wb') as pic:
        for c in f2.chunks():
            pic.write(c)
    print(request.FILES.get('aaa'))
    print(request.POST["query"])
    print(request.FILES.get('video'))
    context = {}
    context['hello123'] = '123'
    return HttpResponse(json.dumps(context),content_type='application/json')