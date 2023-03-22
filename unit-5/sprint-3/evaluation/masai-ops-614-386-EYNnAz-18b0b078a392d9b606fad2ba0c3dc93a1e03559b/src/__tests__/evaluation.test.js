import { fireEvent, render, screen, renderHook, act, cleanup} from "@testing-library/react"
import Button from "../Components/Button";
import Image from "../Components/Image";
import Todos1 from "../Components/Todos1";
import { useTodos } from "../hooks/useTodos";

let initialValues = ['Task1', 'Task2']
const imgSrc = 'https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60';

// cleanup
beforeEach(() => {
    cleanup();
  });
  
  beforeAll(() => {
    global.score = 1;
    console.log("Rest score to: 1");
  });

describe('Testing useTodos hook in Todos1 component', () => {
    beforeEach(() => {
        // eslint-disable-next-line testing-library/no-render-in-setup
        render(<Todos1 initialData={initialValues}/>)
    })
    it('Should have all the elements', () => {
        expect(screen.getByTestId('todos1-input')).toBeInTheDocument();
        expect(screen.getByTestId('todos1-add')).toBeInTheDocument();
        expect(screen.getByTestId('todos1-clear')).toBeInTheDocument();
    })

    it('Should render the initial data', () => {
        expect(screen.getAllByTestId("todos1-element").length).toBe(
            initialValues.length
          );

          initialValues.forEach((num, index) => {
            expect(screen.getAllByTestId("todos1-element")[index]).toHaveTextContent(
              num.toString()
            );
          })

          global.score += 0.5
    })

    it('Should add the todo data, with addData function', async () => {
        expect(screen.getAllByTestId("todos1-element").length).toBe(
            initialValues.length
          );
          let input = screen.getByTestId("todos1-input");
          fireEvent.change(input, { target: { value: "Task3" } });
          fireEvent.click(screen.getByTestId("todos1-add"));
          expect(screen.getAllByTestId("todos1-element").length).toBe(
            initialValues.length + 1
          );

          expect(await screen.findByText("Task3")).toBeVisible();

          global.score += 0.75
    })

    it("Should delete the todo data, based on the index", () => {
        expect(screen.getAllByTestId("todos1-element").length).toBe(
            initialValues.length
          );
          fireEvent.click(screen.getAllByTestId('todos1-delete')[1]);
          expect(screen.getAllByTestId('todos1-element').length).toBe(initialValues.length - 1);
        expect(screen.queryByTestId('Task2')).toBeFalsy();

        global.score += 0.75;
    })

    it('Should clear the todo data, to an empty array', ()  => {
        expect(screen.getAllByTestId("todos1-element").length).toBe(
            initialValues.length
          );
          fireEvent.click(screen.getByTestId("todos1-clear"));
          expect(screen.queryByTestId("todos1-element")).toBeFalsy();
          expect(screen.queryAllByTestId("todos1-element").length).toBe(0)

          global.score += 0.5;
    })
})

describe('Test useTodos hook', () => {
    test('useTodos hook to add Data', () => {
        const {result} = renderHook(() => useTodos(['Task1', 'Task2']));
    
        act(() => {
            result.current.addData('Task3');
          });
    
        expect(result.current.data).toEqual(['Task1', 'Task2', 'Task3']);
    
    
        act(() => {
            result.current.clearData()
        })
    
        expect(result.current.data).toEqual([])

        global.score += 1
    })
    
    test('useTodos hook can remove data by index', () => {
        const {result} = renderHook(() => useTodos(['Task1', 'Task2']));
        act(() => {
            result.current.removeDataByIndex(1);
          });
    
          expect(result.current.data).toEqual(['Task1']);

          global.score += 1;
    })
    
    test("useTodos hook can clear all data to empty array", () => {
        const {result} = renderHook(() => useTodos(['Task1', 'Task2']));
    
        act(() => {
            result.current.clearData()
        })
    
        expect(result.current.data).toEqual([])

        global.score += 0.5;
    })
    
    test('useTodos hook without initial data', () => {
        const {result} = renderHook(() => useTodos());
        expect(result.current.data).toEqual(['Task1'])  
        global.score += 0.5;
    })
})

describe('Testing Custom Image Component', () => {

    it('should have the PropTypes defined for the props', ()=> {
        jest.spyOn(console, 'error')
        render(<Image />);
        expect(console.error).toBeCalledTimes(2)
        global.score += 1;
    })
    it('should render an image tag', ()=> {
        render(<Image />);
        expect(screen.getByRole('img')).toBeInTheDocument()
        global.score += 0.5;
    })

    it('should render the Image component, with the src and the alt attribute', () => {

        render(<Image src={imgSrc} alt='Product'/>);
        expect(screen.getByRole('img')).toHaveAttribute('src', imgSrc)
        expect(screen.getByRole('img')).toHaveAttribute('alt', 'Product')
        global.score += 0.5;
    })


})

describe('Testing Custom Button', ()=> {
    it('should render a button element', () => {
        render(<Button/>)
        expect(screen.getByRole('button')).toBeInTheDocument();
        global.score += 0.25;
    })

    it('Should render with the default class "white", for the colorScheme', () => {
        render(<Button/>);
        expect(screen.getByRole('button')).toHaveClass('white')
        global.score += 0.25;
    })

    it('Should render with the class "red", when passed as the colorScheme prop', () => {
        render(<Button colorScheme='red'/>)
        expect(screen.getByRole('button')).toHaveClass('red')
        global.score += 0.20
    })

    it('Should render with the size "md", when nothing is passed as the size prop', () => {
        render(<Button/>);
        expect(screen.getByRole('button')).toHaveClass('md')
        global.score += 0.10;
    })


    it('Should render with the size "lg", when passed as the size prop', () => {
        render(<Button size='lg'/>);
        expect(screen.getByRole('button')).toHaveClass('lg')
        global.score += 0.20;
    })

    it('Should render without the variant prop by default', () => {
        render(<Button/>)
        expect(screen.getByRole('button')).not.toHaveClass('ghost')
        expect(screen.getByRole('button')).not.toHaveClass('outline')
        global.score += 0.20;
    })

    it('Should render with the variant prop "outline" when passed as the prop', () => {
        render(<Button variant='outline'/>);
        expect(screen.getByRole('button')).toHaveClass('outline')
        global.score += 0.10;
    })

    it('Should render the Button Component with all the props', () => {
        render(<Button variant="outline" colorScheme='green' size='md'/>)
        expect(screen.getByRole('button')).toHaveClass('outline')
        expect(screen.getByRole('button')).toHaveClass('green')
        expect(screen.getByRole('button')).toHaveClass('md')
        global.score += 0.20;
    })
    
    it('Should have the PropTypes defined for the props', () => {
        jest.spyOn(console, 'error')
        render(<Button colorScheme={45} size={true} variant={() => {}}/>)
        expect(console.error).toBeCalledTimes(3)
        global.score += 1;
    })
})

afterAll(() => {
    console.log("Final Score is", global.score);
  });
