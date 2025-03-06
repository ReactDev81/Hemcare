import { View, Text, Dimensions} from "react-native";
import { BarChart } from 'react-native-chart-kit';

const OverviewCard = ({ title, count, name, icon, classname, chartColor}) => {

    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], 
        datasets: [
            {
                data: [2, 4, 1, 5, 8, 6, 2, 1, 1, 1, 1, 1], 
            },
        ],
    };
    
    const chartConfig = {
        backgroundGradientFrom: "#fff",
        backgroundGradientTo: "#fff",
        fillShadowGradient: chartColor,
        fillShadowGradientOpacity: 1,
        color: (opacity = 1) => '',
        barPercentage: 0.3,
        decimalPlaces: 0,
    };

    return (
        <View className={`rounded-2xl p-2.5 flex-1 bg-white ${classname}`}>
            <View className="w-full min-h-[105px] rounded-[5px] flex items-end overflow-hidden">
                <BarChart
                    data={data}
                    width={Dimensions.get("window").width * 0.56}
                    height={105}
                    chartConfig={chartConfig}
                    withHorizontalLabels={false}
                    withVerticalLabels={false}
                    withInnerLines={false}
                    showBarTops={false}
                    fromZero={true}
                />
            </View>
            <Text className="text-blue-dark font-semibold text-sm leading-4">{title}</Text>
            <View className="flex items-end flex-row justify-between">
                <View className="flex flex-row items-end mt-2.5 gap-x-1">
                    <Text className="text-blue-dark font-semibold text-3xl leading-8 -mb-1.5">{count}</Text>
                    <Text className="text-gray-dark font-normal text-sm leading-4">{name}</Text>
                </View>
                <View>{icon}</View>
            </View>
        </View>
    )
}

export default OverviewCard