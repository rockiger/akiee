# Akiee

## DOING  As a developer I want to explore the options of using Clojurescript for Akiee, that I can leverage Lisp for competitive advantage

## TODO As a Gnome3 user, I want better integration, that the app feels more native to me.

acceptance criteria:

- [ ] use adwaita icons instead of glyphicons
- [ ] try to simulate gtk-headerbar with borderless window
- [ ] use flexbox for layout

## TODO As a (kanban) user I want to have the DONE state ordered by time in reverse, that I can see what I finished last

## TODO As A User I want the the details of a task when I klick on it, that I can see notes I did to finish it.

- [ ] Two possibilities 1. New Window,Tab with Deteils. 2. Preview like in Geary, tbd.

## TODO As a User I want to syncronize my tasks via dropbox and similar services, that I can add tasks from every computer I have access to.

acceptance criteria:

- [ ] reload all task if files is changed
- [ ] Offer a file dialog to choose the path of the liveflow-file

## TODO As a user I want to keep notes (not tasks), that I want to keep for future reference, that I can remember important information.

## TODO As a user I want to change the ranking/order of a task via drag and drop, that I can less cumberstone with ranking.

## TODO AS a user I want that Akiee restores the state right where I left it, that I can pick up my work where I left it.

## TODO As a User I want to have an intelligent Entry-Box for the a new task, that I can add important meta information like due date, projecet, etc. easily.

## TODO As a User I want to add recurring task, that I can track task, that I have to do often.
- [ ] Define the interval at which the task is recurring


## TODO As a user I want to filter my currrent list for project, that I can concentrate on one.

## TODO As a person who plans a FUTURE task, I want to add a DOING-date (scheduled) for a task, that I can forget about tasks that have no urgency right now, but will be in my DOING's when I need them.

acceptance criteria

- [ ] choose a DOING-date in the entry field
- [ ] jumps (only) from TODO to DOING on the given date


## TODO As a note keeper I want a agenda view for today, that I can see what I have to do today
- [ ] Agenda View shows all tasks or Doings
- [ ] Define Model, based on org-mode-parser-nodes
- [ ] Agenda View shows a Timetable for Today
- [ ] Agenda View is based on Org-Mode's
- [ ] Toggle Button should be Bootstrap, for nice design
- [ ] Editor should have focus after it is shown
- [ ] There is a Menu entry for Agenda Views
- [ ] There is a Shortcut for the Agenda View
- [ ] Agenda-View should always updated when it's shown

## TODO As a user I want akie appearing suitable to my operating system, that it feels like a native app:

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

## DONE As a task planner I want to add new todos via an entry field, that I can add new tasks without switching to the Editor.

acceptance criteria

- [X] entry field gets opened by `ctrl`+`enter` or click on blue "New" button
- [X] events for underlying tables get caught
- [X] default project is "Inbox", if "Inbox" not present, it gets created at end of file, fill project options with first order headlines (#)
- [X] task gets inserted as last entry under it's project
- [X] if taskstate of new task is the curren shown taskstate, task get's added to shown tasklist

## DONE As a task planner I want to order my tasks, that I work with them in the right order and I don't have to invent rankings via prioritys.

acceptance criteria:

- [X] RANK: [n] where n is an integer and a rank is lower rank comes first
- [X] If rank is null, Task comes last
- [X] If rank of two task is the same, these two tasks won't be sorted
- [X] When new task is created, it gets a rank n+1
- [X] order is assigned by a atomar ranking system.
- [X] A ranking should have only one task and a task should have one ranking only; not enforced, but GUI follow this rule
- [X] User can change rank via gui - nothing fancy yet
- [X] Right now tasks without RANK can't be sorted

## DONE As a Linux user, I want Akiee to resemble Gnome 3's Adwaita theme, that I feel Akiee is good integrated in the operating system (Look out for GTK widget factory to view elements of Adwaita theme; "twf" at the cmd).

acceptance criteria

- [X] The menu bar of Akie should be user Gnome 3's Adwaita Colors in Ubuntu
- [X] The font for the task view should be suitable
- [X] The font for the editor should be suitable
- [X] The menu bar should be fixed

## DONE As a new User I want to have a nice startpage, that I know what I need to do next and bond emotionally

## DONE Task-Change throws Error, if Task has an URL in it's headline

## DONE As a User I want the buttons to represent the state of Akiee, that I what view I am seeing rigth now.

## DONE As a user I want to order tasks without ranking yet in the GUI, that I can order them without using the editor

## DONE As a developer I want to refactor Akiee's code, that I don't go insane and can add new features faster ;)

- [X] Remove the dependencies of Ace-Editor for replacing/writing in the task file, instead replace/write in the ListOfNumber-Datastructure and replace the whole editor content.
- ~~[ ] Remove "module"-pattern in app.js, this is not important in a node-webkit app?~~
- ~~[ ] Create tests with PhantomJS for DOM-Manipulation~~

## DONE As a personal kanban user I want to see an overview of all my task, that I 
better visualize my work

## DONE As a experienced kanban user I want to have a Kanbanboard, that I can visualize my work.

## DONE As a user I want to know the project node of a task, that I know to which project this task belongs.

## DONE As a user I want to be able to search for a task in a certain task view, that I can find task that I entered a while ago.

acceptance criteria:

- [X] Filterbox
- [X] uses all important information: body, Parent node, date, etc.

## DONE As a task planner I want to add due markers to a task, that I know when I have to finish them;
- [X] Due Mark is recognised by the markdown theme and based on org-modes
- [X] DEADLINE: <2013-08-24 Sa 11:00>
- ~~[ ] Entry field allows to set date~~ this is just to ugly right now

## DONE Search- and Entry-Box can both be open at the same time.

## DONE As a new Akiee user, I want a some help what to do next, that I don't to guess what features could be usefull to me.

acceptance criteria:
 - [X] look at Atom and Scratch, when users have no file open (welcome screen)
 - [X] go away from comical style