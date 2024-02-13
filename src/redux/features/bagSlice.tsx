import { createSlice } from "@reduxjs/toolkit";
import { FontType } from "../../types/ElementTypes";
import type { PayloadAction } from '@reduxjs/toolkit'


interface initialStateType{
    fonts: FontType[],
}
const initialState: initialStateType = {
    fonts: JSON.parse(localStorage.getItem('fonts') as string) || []
}

export const bagSlice = createSlice({
    name: "bag",
    initialState,
    reducers:{
        updateFonts: (state, action: PayloadAction<FontType>) => {
            if(state.fonts.find(font => font.fontName === action.payload.fontName)){
                if(action.payload.variants.length !== 0){
                    state.fonts.map((font:FontType) => {
                        if(font.fontName === action.payload.fontName){
                            font.variants = action.payload.variants
                        }   
                    })
                }else{
                    state.fonts = state.fonts.filter((font:FontType) => font.fontName !== action.payload.fontName)
                }
                localStorage.setItem('fonts', JSON.stringify(state.fonts))
            }else{
                state.fonts = [...state.fonts, action.payload]
                localStorage.setItem('fonts', JSON.stringify(state.fonts))
            }
        },
    }
})  

export const {updateFonts} = bagSlice.actions
export default bagSlice.reducer