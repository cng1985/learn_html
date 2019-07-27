private double getStep(boolean isPlus, double value) {
    List<MedicineInfo> medicineInfos = getCurrentMedicine();
    if (medicineInfos.size() == 0) {
        //自定义药品
        return 1;
    } else {

        MedicineRuleInfo ruleInfo = dbMedicineRuleInfos.get(medicineInfos.get(0).getMedicine_id());
        if (null == ruleInfo) {//规则表中没有此药，增加按照自定义计算
            return 1;
        } else {//规则表中有此药，需要按照规则进行增加
            List<MedicineStepBean> stepBeans;
            if (isPlus) {
                stepBeans = GsonConvertUtil.getInstance().strConvertArray(MedicineStepBean.class, ruleInfo.getJson_step_plus());
            } else {
                stepBeans = GsonConvertUtil.getInstance().strConvertArray(MedicineStepBean.class, ruleInfo.getJson_step_reduce());
            }
            if (stepBeans == null || stepBeans.size() == 0) {//没有添加步长规则数据
                return 1;
            } else {
                for (MedicineStepBean step : stepBeans) {
                    double max = -1;
                    double min = -1;
                    if (step.getEqual_min() == 0) {//是否可以等于
                        if (step.getEqual_max() == 0) {// (0,10)
                            max = step.getMax_value();
                            min = step.getMin_value();
                        } else {//(0,10]
                            max = step.getMax_value() + 0.001;
                            min = step.getMin_value();
                        }

                    } else {
                        if (step.getEqual_max() == 0) {// [0,10)
                            max = step.getMax_value();
                            min = step.getMin_value() - 0.001;

                        } else {// [0,10]
                            max = step.getMax_value() + 0.001;
                            min = step.getMin_value() - 0.001;
                        }

                    }
                    if (value > min && value < max) {
                        return step.getStep_value();
                    }

                }
            }
            return 1;
        }
    }

}