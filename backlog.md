# Akiee

## TODO As a task planner I want to add new todos via an entry field, that I can add new tasks without switching to the Editor.

## TODO As a task planner I want to order my tasks, that I work with them in the right sequence and I don't have to invent rankings via prioritys.

acceptance criteria:

- [ ] order is assigned by a atomar ranking system. A ranking has only one task and a task has one ranking only.

## BUG Task-Change throws Error, if Task has an URL in it's headline

## TODO As a Ubuntu user, I want Akiee to resemble Ubuntu's Ambiance them, that I feel Akiee is good integrated in the operating system.

acceptance criteria

- [ ] The menu bar of Akie should be user Ambiance Colors in Ubuntu
- [ ] The font for the task view should be Ubuntu
- [ ] The font for the editor should be Ubuntu Mono
- [ ] The menu bar should be fixed

## TODO As a task planner I want to add due markers to a task, that I know when I have to finish them
- [ ] Due Mark is recognised by the markdown theme and based on org-modes
- [ ] DEADLINE: <2013-08-24 Sa 11:00>

## TODO As a note keeper I want a agenda view for today, that I can see what I have to do today
- [ ] Agenda View shows all Todos
  - [ ] Define Model, based on org-mode-parser-nodes
- [ ] Agenda View shows a Timetable for Today
  - [ ] Agenda View is based on Org-Mode's
- [ ] Toggle Button should be Bootstrap, for nice design
- [ ] Editor should have focus after it is shown
- [ ] There is a Menu entry for Agenda Views
- [ ] There is a Shortcut for the Agenda View
- [ ] Agenda-View should always updated when it's shown

## TODO As a User I want the buttons to represent the state of nw, that I what view I am seeing rigth now.
## As a User I want to add recurring task, that I can track task, that I have to do often.
- [ ] Define the interval at which the task is recurring

## TODO As A User I want the the details of a task when I klick on it, that I can see notes I did to finish it.

- [ ] Two possibilities 1. New Window,Tab with Deteils. 2. Preview like in Geary, tbd.

## TODO As a user I want that the filter buttons have the same color as the states, that I can make a connection between them.

acc:
- [ ] green for doing
- [ ] blue for todo
- [ ] grey for done

## TODO As a user I want akie appiering in a the suitable to my operating system, that it feels like a native app:

acc:

- [ ] Ubuntu Ambiance on Ubuntu
- [ ] Some Mac Theme on MAC
- [ ] Windows 8 Theme on Windows

## DONE As the user I want to see all my DOING's after livewookie is started, that I can begin with my work instantly.

## DONE As a programmer I want to learn how to use mocha in node-webkit, to satisfy my personal quality needs.
  Aborted, because of problems between node-webkit and standard testing

- [X] Install Mocha to the projecct
- [ ] Write a view sample testcases
- [X] Write user tests for existing features
- [ ] Install the chrome-driver for node-webkit

## DONE As a programmer I want to use a testing framework that works like racket, that I can easily transelate the knowledge I gained.

## DONE As lw developer I want to change the mini-code-edit base to fit my needs, that it is becoming my project and I can learn the things that I need are most valuable to me
AC:
- [X] Changing zepto.min.js to jquery.js - speed should not be in issue in the beginning
- [X] removing unused files (angular, zepto ...)

## DONE As a user I want to see my notes, when I open live wookiee, that I see my notes instantly.
- [X] a standard org file ist loaded (liveflow.md)
- [X] liveflow.org is located at ~/.livewookie/liveflow.md
- [X] liveflow.org doesn't exists it should be created   
- [X] It is opened with the start of the program

## DONE As a note keeper I want every change in my notes saved instantly, that I don't have to worry about forgetting them.
- [X] Saving the notes after focus is lost
- [X] Saving should not interfere with the typing or other user actions
- [X] Saving should only be done, if there are any changes to the file

## DONE As a note keeper I want to use markdown files as the basis for my list and outlines proper theme for my org file, that I can quickly navigate through them and use ace features for text movement
- [X] use a markdown file as standard file instead of org-file
- [X] Proper Styling for an markdown-file
- [X] Open/Close on code folding via Keyboard (Alt-Shift-9/Alt-0)
- [X] Move Parts of the Structure around via Keyboard, if it's folded (Alt-Up/-Down )

## DONE As a task planner I want to add state keywords to headings and list, that I can mark them as tasks
- [X] TODO and DONE are recognised by the markdown theme

## DONE As a programmer I want to use a testing framework that works like racket, that I can easily transelate the knowledge I gained.

## DONE As lw developer I want to change the mini-code-edit base to fit my needs, that it is becoming my project and I can learn the things that I need are most valuable to me
    AC:
    - [X] Changing zepto.min.js to jquery.js - speed should not be in issue in the beginning
    - [X] removing unused files (angular, zepto ...)

## DONE A a user I want to see my notes, when I open live wookiee, that I see my notes instantly. DEADLINE: <2013-08-24 Sa 11:00> 

## DONE As a note keeper I want, that the editor area is focused after the start of livewookie, that I can start writing instantly.

## DONE Find a better solution to the workaraund for the loading problem in main()

## DONE As a user I want to change the state of a task with a simple action, that I can easyly check my task without switching to the editor and breaking my flow.

- [X] Change the color of the task to according to it's state
-- [X] User the right colors for changed taskstates from bootstrap as with panel titles
- [X] Change the state of the task in the table row
- [X] Change the state of the task in editor

## DONE As a task planner I want to add TODO/DONE via keys/shortcut, to easily decide wich headings/list-items are tasks and in which state they are.

acceptance criteria:

- [X] `up`/`down`/`j`/`k` for selecting tasks, if no task already selected, first one will be selected
- ~~[ ] `right`/`left`/`space`/`shift`+`space` cycle through states~~
- [X] `d`->DONE, `t`->DOING, `shift`+`t`->TODO
- [X] Shortcuts are added to `shortcuts.md`

