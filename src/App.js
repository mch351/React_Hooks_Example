import {
    UseRefExample,
    UseMemoExample,
    UseCallbackExample,
    UseReducerExample,
    UseLayoutEffectExample,
    UseImperativeHandleExample,
    UseDeferredValueExample,
    UseTransitionExample
} from "./hooks";
import Accordion from "./components/Accordion";


const App = () => {
    return (
        <div className="container">
            <div className="text-center pt-2">
                <h2>یادگیری و استفاده از هوک های ری اکت</h2>
            </div>
            <hr className="text-danger"/>
            <Accordion title="مثال هوک useRef" heading="heading1">
                <UseRefExample/>
            </Accordion>
            <hr className="text-success"/>
            <Accordion title="مثال هوک useMemo" heading="heading2">
                <UseMemoExample/>
            </Accordion>
            <hr className="text-success"/>
            <Accordion title="مثال هوک useCallback" heading="heading3">
                <UseCallbackExample/>
            </Accordion>
            <hr className="text-success"/>
            <Accordion title="مثال هوک useReducer" heading="heading4">
                <UseReducerExample/>
            </Accordion>
            <hr className="text-success"/>
            <Accordion title="مثال هوک useReducer" heading="heading5">
                <UseLayoutEffectExample/>
            </Accordion>
            <hr className="text-success"/>
            <Accordion title="مثال هوک UseImperativeHandleExample" heading="heading6">
                <UseImperativeHandleExample/>
            </Accordion>
            <hr className="text-success"/>
            <Accordion title="مثال هوک UseDeferredValueExample" heading="heading7">
                <UseDeferredValueExample/>
            </Accordion>
            <hr className="text-success"/>
            <Accordion title="مثال هوک UseTransitionExample" heading="heading8">
                <UseTransitionExample/>
            </Accordion>
            <hr className="text-success"/>
            <Accordion title="مثال هوک شخصی سازی شده" heading="heading9">
                <CustomHook/>
            </Accordion>
            <hr className="text-success"/>
        </div>
    );
}

export default App;
