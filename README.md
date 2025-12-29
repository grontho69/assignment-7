
## WELCOME TO ( সহজ সরল সিম্পল ) ASSIGNMENT-007

### 📅 Deadline For 60 marks: 27th September, 2025 (11:59 pm ⏱️)

### 📅 No Deadline For 50 marks 

### 📅 Deadline For 30 marks: Any time after 27th September , 2025 (11:59pm⏱️).

---

# Private Repository: https://classroom.github.com/a/VVl8VKya

# Customer Support Zone

This project is a React-based **Customer Support Zone** designed to display customer tickets, track progress, and mark them as resolved. It follows a Figma design and includes additional features like status management, responsiveness, and toast notifications using **React-Toastify**.

---

## 📌 Features & Requirements 

### ✅ Navbar 

* Website name/logo on the **left**.
* Menu items and **New Ticket** button on the **right**.

### ✅ Banner

* Banner section designed according to Figma.
* Shows a **linear gradient** background.
* Displays ticket statistics:

  * **In Progress Count**
  * **Resolved Count** (default = 0).

### ✅ Main Section

1. **JSON Data **

   * Created **10–15 tickets** with the following properties:

     * `id`, `title`, `description`, `customer`, `priority`, `status`, `createdAt`.

2. **Ticket Cards**

   * Display all ticket information in a **card layout**.
   * Cards arranged in a **2-column grid** (left side).

3. **Task Status Section**

   * Clicking a card adds it to the **Task Status Section** (right side) and shows alert. It will increase the count of in-progress in banner
   * Task Status shows:

     * Ticket Title
     * **Complete Button**
   * Clicking **Complete Button**:

     * show alert
     


### ✅ Footer 

* Designed according to Figma.

### ✅ Responsiveness 

* The entire website is **responsive** for mobile devices.

### ✅ Readme: 
Create a README file to answer the following question-

 - What is JSX, and why is it used?
 - What is the difference between State and Props?
 - What is the useState hook, and how does it work?
 - How can you share state between components in React?
 - How is event handling done in React?

---

## Questions & Answers

1. What is JSX, and why is it used?

  JSX (JavaScript XML) is a syntax extension for JavaScript that looks like HTML. It is used with React to describe the UI structure in a declarative way. JSX makes component markup easier to write and read and is compiled to React.createElement calls.

2. What is the difference between State and Props?

  - Props (properties) are read-only values passed from parent to child components. They are immutable inside the child.
  - State is internal to a component and can be changed with hooks like useState. State changes trigger re-renders.

3. What is the useState hook, and how does it work?

  The useState hook is a React hook that lets you add state to functional components. It returns a state variable and a setter function: const [value, setValue] = useState(initialValue). Calling setValue updates the state and triggers a re-render.

4. How can you share state between components in React?

  Common approaches:

  - Lift state up: keep state in the nearest common parent and pass it down via props.
  - Context API: provide state via React.createContext to avoid prop drilling.
  - State management libraries (Redux, Zustand) for larger apps.

5. How is event handling done in React?

  React uses camelCase event handlers passed as props (e.g., onClick, onChange). You pass a function reference or arrow function: <button onClick={() => doSomething()}>Click</button>. Handlers receive a synthetic event object.

---

Notes:

- This project uses React-Toastify to show toast notifications instead of window.alert. Interactions such as adding a ticket to Task Status and marking it complete produce toasts and update the banner counts.


### 

## 📌 Challenge Requirements 

### 🔔 React-Toastify 

* Used **React-Toastify** to replace all alerts with stylish toast notifications.

### 📝 Task Completion Logic 

Clicking **Complete Button**:

1. It is **removed from Task Status**. 
2. It is added to the **Resolved List**. 
3. The **In Progress count decreases**. 
4. The **Resolved count increases**. 
5. It is removed from the **Customer Tickets list**. 


---


