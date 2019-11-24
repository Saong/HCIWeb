from __future__ import print_function
# -*- coding: utf-8 -*-
import os
import json
from django.http import HttpResponse
import requests,json
import pickle
def findclip(request):
    print(request.POST["query"])
    f2 = request.FILES.get('video')
    # 文件保存路径
    fname ='/data02/chengjian19/videos/'+f2.name
    #fname = '.\\uploadvideo\\' + f2.name
    with open(fname, 'wb') as pic:
        for c in f2.chunks():
            pic.write(c)
    url = 'http://12.12.12.3:7009/'
    data = {}
    data['sentence'] = 'The person takes out a cutting board from the drawer'
    data['video_name'] = 's27-d70.avi'
    #data['sentence'] = request.POST["query"]
    #data['video_name'] = f2.name
    #r = requests.post(url,data)
    context = {}
    context['answer'] = '1111'
    print(context['answer'])
    return HttpResponse(json.dumps(context),content_type='application/json')