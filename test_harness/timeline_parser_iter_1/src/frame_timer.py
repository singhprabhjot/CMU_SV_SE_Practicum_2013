__author__ = 'Aristide'

import sys
import json
import os

def deserialize_timeline_capture(path):
    json_file = open(path, 'r')
    deser_json = json.load(json_file)
    return deser_json


def check_for_event_type (list_of_objects, event_name):
    event_is_present = False
    i = 0
    list_length = len(list_of_objects)

    while (event_is_present != True and i < list_length):
        obj = list_of_objects[i]
        if event_name in obj.values():
            event_is_present = True
        else:
            i += 1

    return event_is_present


def get_frame_timings(events_data, event_before_frame):
    is_frame_event_pending = False
    timings = []

    for object in events_data:
        # The true events list is the val of the "children key"
        events_list = object["children"]

        if (is_frame_event_pending):
            # Check for the beginFrame event; when found:
            # 1. push the timing of the object in the list of timings,
            # 2. toggle the frame_event_pending flag
            is_frame_event_found = check_for_event_type(events_list, "BeginFrame")

            if (is_frame_event_found == True):
                timings.append(object["endTime"] - object["startTime"])
                is_frame_event_pending = False

        else:
            # Check for event_before_frame in the list and toggle the frame_event_pending flag
            is_event_before_frame_found = check_for_event_type(events_list, event_before_frame)

            if (is_event_before_frame_found == True):
                is_frame_event_pending = True

    return timings


def main(argv):
    #pass event name markLoad to func
    #print list returned
    #

    # Get timeline data
    file_path = os.path.abspath('../timeline_data4.json')
    timeline_data = deserialize_timeline_capture(file_path)
    environment_data = timeline_data[0]
    events_data = timeline_data[1:]

    # print timeline_data
    print environment_data
    # print json.dumps(events_data, indent=4, separators=(',', ': '))

    # Get frame timings after load, and print 'em
    load_event_type = "MarkLoad"
    next_frame_timings = get_frame_timings(events_data, load_event_type)
    print next_frame_timings

    # Get frame timings after style change, and print 'em
    style_change_event_type = "RecalculateStyles"
    next_frame_timings = get_frame_timings(events_data, style_change_event_type)
    print next_frame_timings


if __name__ == '__main__':
    main()


