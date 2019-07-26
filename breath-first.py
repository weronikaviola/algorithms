from collections import deque

def person_is_seller(name):
    return name[-1] == 'm'


search_queue=deque()

graph = {
    "me": ["bob", "alice", "claire"],
    "bob": ["anuj", "peggy"],
    "alice": ["peggy"],
    "claire": ["thom", "jonny"],
    "anuj": [],
    "peggy": [],
    "jonny": [],
    "thom": [],
}

def search(name):
    search_queue = deque()
    search_queue += graph[name]
    searched = []
    while search_queue:
        person = search_queue.popleft()
        if not person in searched:
            if person_is_seller(person):
                print(person+" is a mango seller")
                return True
            else:
                search_queue += graph[person]
                searched.append(person)
    return False

search("me")

