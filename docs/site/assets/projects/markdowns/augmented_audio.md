Augmented Audio project is my senior design project, and won 2nd place among 13 teams using just over half of the budget ($599).


Augmented Audio is a wearable device that detects objects in front of a visually-impaired user and displays them as spatialized audio cues. These audio cues allow the user to hear a noise for each object in their vicinity.


We detect objects using Google’s Tensorflow Object Detection API, along with a frozen Single Shot Multibox Detector model (with Mobilenet) pre-trained on the COCO data-set.


For every frame, the (x,y,z) coordinates are appropriately calibrated and passed to the Unity game engine. The Superpowered Audio Spatializer plugin generates 3D audio for each virtual object and sends an audio signal to the headphones.
