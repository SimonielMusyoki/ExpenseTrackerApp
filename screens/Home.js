import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
    FlatList,
    Animated,
    SafeAreaView
} from 'react-native'

import {
    categoriesData,
    pendingStatus,
    confirmStatus
} from '../data';

import { COLORS, FONTS, SIZES, icons } from '../constants';

const Home = () => {

    const categoryListHeightAnimationValue = React.useRef(new Animated.Value(115)).current

    const [viewMode, setViewMode] = React.useState("chart");
    const [categories, setCategories] = React.useState(categoriesData);
    const [selectedCategory, setSelectedCategory] = React.useState(null);
    const [showMoreToggle, setShowMoreToggle] = React.useState(false)

    function renderNavBar() {
        return (
            <View style={{
                flexDirection: "row",
                height: 80,
                alignItems: 'flex-end',
                justifyContent:'space-between',
                backgroundColor: COLORS.white,
                paddingHorizontal: SIZES.padding
            }}>
                <TouchableOpacity
                    style={{ justifyContent: "center", width:50 }}
                    onPress={()=>console.log("Back")}
                >
                    <Image
                        source={icons.back_arrow_icon}
                        resizeMode="contain"
                        style={{
                            width:30,
                            height:30,
                            tintColor: COLORS.primary
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ justifyContent: "center", width:50 }}
                    onPress={()=>console.log("More")}
                >
                    <Image
                        source={icons.more_icon}
                        resizeMode="contain"
                        style={{
                            width:30,
                            height:30,
                            tintColor: COLORS.primary
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderHeader() {
        return (
            <View style={{ 
                backgroundColor: COLORS.white, }}>
                <View style={{ padding: SIZES.padding, backgroundColor: COLORS.white}}>
                    <Text style={{ ...FONTS.h2, color: COLORS.primary}}>My Expenses</Text>
                    <Text style={{ ...FONTS.h3, color: COLORS.darkgray}}>Summary (private)</Text>
                </View>
                <View style={{ 
                    flexDirection: "row", 
                    paddingLeft: SIZES.padding, 
                    height: 50,
                    marginBottom: SIZES.padding,
                    alignItems: "flex-start"
                }}
                >
                    <View style={{
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        backgroundColor: COLORS.lightGray,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Image
                            source={icons.calendar_icon}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.lightBlue,
                                borderRadius: 10,

                            }}
                        />
                    </View>
                    <View style={{ paddingLeft: SIZES.padding /2, justifyContent: "center", alignItems: "flex-start"}}>
                        <Text style={{...FONTS.h3, color: COLORS.primary}}>Dec. 10, 2020</Text>
                        <Text style={{ ...FONTS.body3, color: COLORS.darkgray}}>18% lower than month</Text>
                    </View>
                </View>
            </View>
        )
    }

    function renderCategorySections(){
        return (
            <View style={{ flexDirection:"row", justifyContent:"space-between", height:50, marginTop:5}}>
                <View style={{ paddingLeft: SIZES.padding, justifyContent:"center"}}>
                    <Text style={{ ...FONTS.h3, textTransform: "uppercase", color: COLORS.primary}}>Categories</Text>
                    <Text style={{ ...FONTS.h4,color: COLORS.darkgray}}> {categories.length} Total</Text>
                </View>
                <View style={{
                    flexDirection: "row",
                    paddingVertical: 2,
                    justifyContent:"center",
                    alignItems: "center"
                }}>
                        <TouchableOpacity 
                            style={{
                                marginRight: 5,
                                backgroundColor: viewMode=="chart" ? COLORS.peach : null,
                                padding: 10,
                                borderRadius: SIZES.radius*2,
                            }}
                            onPress={() => setViewMode("chart")}
                        >
                        <Image 
                            source={icons.chart_icon}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: viewMode=="chart" ? COLORS.white : COLORS.lightBlue,
                                padding:SIZES.radius
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={{
                            marginRight: SIZES.padding,
                            backgroundColor: viewMode=="list" ? COLORS.peach : null,
                            padding: 10,
                            borderRadius: SIZES.radius*2,
                        }}
                        onPress={() => setViewMode("list")}
                    >
                        <Image 
                            source={icons.menu_icon}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: viewMode=="list" ? COLORS.white : COLORS.lightBlue,
                                padding:SIZES.radius
                            }}
                        />
                    </TouchableOpacity>
                </View>
                
            </View>
        )
    }

    function renderCategoryLists() {

        const renderItem = ({item}) => {
            return (
                <View>
                    <TouchableOpacity
                        style={{
                            flex: 1,   
                            width: SIZES.width*0.43,                         
                            flexDirection: "row",
                            margin: 5,
                            paddingVertical: SIZES.radius,
                            paddingHorizontal: SIZES.padding,
                            backgroundColor: COLORS.white,
                            borderRadius: 5,
                            ...styles.shadow
                        }}

                        onPress={() => setSelectedCategory(item)}
                    >
                        <Image
                            source={item.icon}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: item.color,
                            }}
                        />
                        <Text style={{...FONTS.h4, marginLeft: SIZES.base, color: COLORS.primary}}>{item.name}</Text>
                    </TouchableOpacity>
                </View>
            )
        }
        return(
            <View>
                <Animated.View style={{ paddingHorizontal: SIZES.padding - 5, height: categoryListHeightAnimationValue }}>
                    <FlatList 
                        data={categories}
                        renderItem={renderItem}
                        keyExtractor={item=>`${item.id}`}
                        numColumns={2}
                    />
                </Animated.View>
                <TouchableOpacity
                    style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        marginVertical: SIZES.base
                    }}
                    onPress={()=>{
                        if(showMoreToggle){
                            Animated.timing(categoryListHeightAnimationValue,{
                                toValue: 115,
                                duration: 300,
                                useNativeDriver: false
                            }).start()
                        }else{
                            Animated.timing(categoryListHeightAnimationValue,{
                                toValue: 172.5,
                                duration: 300,
                                useNativeDriver: false
                            }).start()
                        }
                        setShowMoreToggle(!showMoreToggle)
                    }}
                >
                    <Text style={{...FONTS.body3, marginRight: SIZES.base}}>{ showMoreToggle ? "LESS" : "MORE"}</Text>
                    <Image 
                        source={ showMoreToggle ? icons.up_arrow : icons.down_arrow}
                        style={{
                            width: 15,
                            height: 15,
                            alignSelf:'center'
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderIncomingExpensesTitle(){
        return (
            <View 
                style={{ 
                    marginVertical: SIZES.base,
                    paddingHorizontal: SIZES.padding
                }}
            >
                <Text style={{...FONTS.h3, color: COLORS.primary}}>INCOMING EXPENSES</Text>
                <Text style={{...FONTS.body4, color: COLORS.darkgray}}>12 Total</Text>
            </View>
        )
    }

    function renderIncomingExpenses(){
        let allExpenses = selectedCategory ? selectedCategory.expenses : [];
        let incomingExpenses =allExpenses.filter(a=> a.status =="P");

        const renderItem = ({item, index}) =>{
            return (
                <View style={{
                    width: 300,
                    marginRight: SIZES.padding,
                    marginLeft: index==0 ? SIZES.padding : 0,
                    marginVertical: SIZES.radius,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.white,
                    ...styles.shadow
                }}>
                    {/* Title */}
                    <View style={{ flexDirection: "row", padding: SIZES.padding, alignItems: "center"}}>
                        <View style={{
                            height: 50,
                            width: 50,
                            borderRadius: 25,
                            backgroundColor: COLORS.lightGray,
                            alignItems:"center",
                            justifyContent: "center",
                            marginRight: SIZES.base
                        }}>
                            <Image
                                source={selectedCategory.icon}
                                style={{
                                    width:30,
                                    height: 30,
                                    tintColor: selectedCategory.color
                                }}
                            />
                        </View>
                        <Text style={{...FONTS.h3, color: selectedCategory.color}}>{selectedCategory.name}</Text>
                    </View>

                    {/* Expense Description */}
                    <View style={{ paddingHorizontal: SIZES.padding}}>
                        <Text style={{...FONTS.h2}}>{item.title}</Text>
                        <Text style={{...FONTS.body3, flexWrap: 'wrap',color:COLORS.darkgray}}>{item.description}</Text>
                    </View>

                    {/* Location */}
                    <Text style={{marginTop:SIZES.padding,paddingHorizontal: SIZES.padding, ...FONTS.h4}}>Location</Text>
                    <View style={{ flexDirection:"row",paddingHorizontal: SIZES.padding}}>
                        <Image
                            source={icons.pin}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.darkgray,
                                marginRight: 5
                            }}
                        />
                        <Text style={{...FONTS.body4, color: COLORS.darkgray}}>{item.location}</Text>
                    </View>

                    {/* Price */}
                    <View style={{
                        height:50,
                        alignItems:"center",
                        justifyContent: "center",
                        borderBottomStartRadius: SIZES.radius,
                        borderBottomEndRadius: SIZES.radius,
                        backgroundColor: selectedCategory.color
                    }}>
                        <Text style={{ color: COLORS.white, ...FONTS.body3}}>CONFIRM {item.total.toFixed(2)} KES</Text>
                    </View>
                </View>
            )
        }
        return(
            <View>
                { renderIncomingExpensesTitle() }
                {
                    incomingExpenses.length > 0 &&
                    <SafeAreaView>
                        <FlatList
                            data={incomingExpenses}
                            renderItem={renderItem}
                            keyExtractor={item=>`${item.id}`}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </SafeAreaView>
                    
                }
                {
                    incomingExpenses.length == 0 &&
                    <View style={{ height:150, justifyContent:"center", alignItems:"center"}}>
                        <Text style={{ ...FONTS.h3, color: COLORS.primary}}>No record</Text>
                    </View>
                }
            </View>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.lightGray2}}>
            {/* NavBar */}
            { renderNavBar() }
            {/* Header Section */}
            { renderHeader() }
            {/* Category Sections */}
            { renderCategorySections() }
            {/* CategoryLists */}
            <ScrollView contentContainerStyle={{paddingBottom: 60}}>
                {
                    viewMode=="list" &&
                    <View>
                        {renderCategoryLists()}
                        {renderIncomingExpenses()}
                    </View>
                }
            </ScrollView>
        </View>
        
    )
}

const styles = StyleSheet.create({
    shadow:{
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
    }
})

export default Home;